import { useState } from 'react'

function Form(props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      props.submitNewLink({ name, email })
      setName("")
      setEmail("")
    }}>
      <label htmlFor="linkName">Name:</label>
      <input type="text" id="linkName" value={name} onChange={handleNameChange}/>
      <br />
      <label htmlFor="linkEmail">Email:</label>
      <input type="text" id="linkEmail" value={email} onChange={handleEmailChange}/>
      <br />
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default Form