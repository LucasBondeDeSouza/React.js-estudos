import React, { useState } from "react"

export default () => {

  const [name, setName] = useState("")
  const [heandingText, setHeanding] = useState("")

  function handleChange(e) {
    setName(e.target.value)
  }

  function handleClick(e) {
    setHeanding(name)

    // Não atualiza a página após apertar no botão 'Submit'
    e.preventDefault()
  }

  return (
    <div className="container">
      <h1>Hello {heandingText}</h1>

      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}