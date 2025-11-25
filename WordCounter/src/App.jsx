import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [text, setText] = useState("")  


  const wordCount = text.trim()===""
  ? 0
  : text.split(/\s/).length

  return (
    <div>
      <textarea 
      value={text}
      placeholder="Hello Write Here....."
      style={{height:"100px",
         width:"300px", 
         font:"bold"
      }}
      onChange={(e)=>setText(e.target.value)}
      />
      <p >Total Words : {wordCount}</p>
    </div>
  )
}

export default App
