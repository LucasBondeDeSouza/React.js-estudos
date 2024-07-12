import React, { useState } from "react"

export default () => {

  const now = new Date().toLocaleTimeString()

  const [time, setTime] = useState(now)

  function updateTime() {
    const newTime = new Date().toLocaleTimeString()
    setTime(newTime)
  }

  setInterval(updateTime, 1000)

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  )
}