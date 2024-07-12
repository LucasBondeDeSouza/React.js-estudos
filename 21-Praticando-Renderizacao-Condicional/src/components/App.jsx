import React from "react";
import Form from "./Form";

export default () => {

  var userIsRegistered = false

  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  )
}