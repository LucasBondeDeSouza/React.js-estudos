import React from "react";

export default () => {

  function strike() {
    document.getElementById('root').style.textDecoration = 'line-through'
  }

  function unStrike() {
    document.getElementById('root').style.textDecoration = null
  }

  return (
    <div>
      <p>Buy Milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  )
}