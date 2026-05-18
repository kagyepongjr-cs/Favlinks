import Table from './Table'
import Form from './Form'
import { useState, useEffect } from 'react'

function LinkContainer() {
  const [favLinks, setFavLinks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => setFavLinks(data))
  }, [])

  const handleRemove = (id) => {
    fetch(`http://localhost:3000/users/${id}`, { method: 'DELETE' })
      .then(() => setFavLinks(favLinks.filter(link => link.id !== id)))
  }

  const handleSubmit = (favLink) => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(favLink)
    })
      .then(() => fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => setFavLinks(data)))
  }

  return (
    <div>
      <h1>My Favorite Links</h1>
      <p>Add a new link with a name and URL to the table!</p>
      <Table data={favLinks} removeLink={handleRemove}/>
      <h1>Add New</h1>
      <Form submitNewLink={handleSubmit}/>
    </div>
  )
}

export default LinkContainer