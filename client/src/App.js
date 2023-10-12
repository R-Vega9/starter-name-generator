import React, { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState([])

  useEffect(() => {
    fetch('https://name-generator-backend-p811.onrender.com/')
      .then((res) => res.json())
      .then((name) => setName([name]))
  }, [])

  return (
    <h1>{name}</h1>
  )
}

export default App
