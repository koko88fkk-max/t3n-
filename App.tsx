import { useState } from 'react'
import { askGemini } from './services/gemini'

export default function App() {
  const [q, setQ] = useState('')
  const [a, setA] = useState('')

  async function send() {
    setA('...')
    const res = await askGemini(q)
    setA(res)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>T3N AI</h1>
      <input value={q} onChange={e => setQ(e.target.value)} />
      <button onClick={send}>Send</button>
      <p>{a}</p>
    </div>
  )
}
