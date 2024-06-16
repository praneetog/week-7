import React, { useState } from 'react'

function App() {
  const [wordLength, setWordLength] = useState(0);
  const [paragraph, setParagraph] = useState('');

  const fetchRandomWords = async (wordLength) => {
    const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit'];
    try {
      //fetch random word using api
      const response = await fetch(`https://random-word-api.herokuapp.com/word?number=${ wordLength }`);
      const words = await response.json();
      return words.join(' ') + '.';
    } catch (error) {
      console.error('Error fetching random words:', error);
    }
  };
  const generateParagraph = async (wordLength) => {
    const randomParagraph = await fetchRandomWords(wordLength);
    setParagraph(randomParagraph);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter word length"
        value={wordLength}
        onChange={(e) => setWordLength(e.target.value)}
      />
      <button onClick={() => generateParagraph(wordLength)}>Generate Paragraph</button>
      <p>{paragraph}</p>
    </div>
  )
}

export default App
