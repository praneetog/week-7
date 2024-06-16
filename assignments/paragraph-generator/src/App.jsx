import React, { useState } from 'react'

function App() {
  const [wordLength, setWordLength] = useState(0);
  const [paragraph, setParagraph] = useState('');

  const generateParagraph = (length) => {
    const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit'];
    let result = '';
    for (let i = 0; i < length; i++) {
      result += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    setParagraph(result.trim() + '.');
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
