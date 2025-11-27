import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("asdas")
  const [length, setLength] = useState(8)
  const [isNumberAllowed, setIsNumberAllowed] = useState(false)
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false)
  const passwordRef = useRef()

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (isNumberAllowed) str += "1234567890"
    if (isCharacterAllowed) str += "!@#$%^&*()_+-=[]{}~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, isCharacterAllowed, isNumberAllowed])

  useEffect(() => {
    PasswordGenerator()
  }, [length, isCharacterAllowed, isNumberAllowed, PasswordGenerator])

  const copyToClipBoard = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Password Generator</h2>

        <div className="input-group">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="password-box"
          />
          <button className="btn" onClick={copyToClipBoard}>Copy</button>
        </div>

        <div className="options">
          <label className="option">
            Length: {length}
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="slider"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </label>

          <label className="option">
            Allow Numbers
            <input
              type="checkbox"
              checked={isNumberAllowed}
              onChange={() => setIsNumberAllowed(!isNumberAllowed)}
            />
          </label>

          <label className="option">
            Allow Special Characters
            <input
              type="checkbox"
              checked={isCharacterAllowed}
              onChange={() => setIsCharacterAllowed(!isCharacterAllowed)}
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default App
