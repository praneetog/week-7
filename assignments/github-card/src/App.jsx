import { useState } from 'react'
import GitHubCard from './components/GithubCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GitHubCard username="praneetog" />
  )
}

export default App
