import React from 'react'
import { useState } from 'react'

export default function Todo() {
  const [input, setInput] = useState('')
  const [data, setData] = useState([])

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleClick = () => {
    setData([...data, input])
    setInput('')
  }

  return (
    <div>
      <input type='text' value={input} onChange={handleChange} />
      <button onClick={handleClick}>Click</button>
      {data?.map((item, id) => (
        <p key={id}>{item}</p>
      ))}
    </div>
  )
}
