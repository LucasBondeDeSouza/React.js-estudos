import React from "react";
import Login from "./Login";

export default () => {

  var isLoggedIn = false

  const currentTime = new Date().getHours()

  return (
    <div className="container">{
      // Ternario
      // isLoggedIn ? <h1>Hello</h1> : <Login />

      // Operador AND
      currentTime > 12 && <h1>Why are you still working?</h1>
      }
    </div>
  )
}