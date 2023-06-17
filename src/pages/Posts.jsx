import React, { useEffect, useState } from 'react'

export default function Posts() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])
  return (
    <div>
      {data?.map((item,id) => (
        <p key={id}>{item.title}</p>
      ))}
    </div>
  )
}
