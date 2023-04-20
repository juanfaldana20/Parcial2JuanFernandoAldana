import { useState } from 'react'
import PostsList from './PostsList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <PostList />
  </div>
  )
}

export default App
