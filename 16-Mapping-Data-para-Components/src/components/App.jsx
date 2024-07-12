import React from "react";
import "../../public/style.css"

import Card from "./Card";
import contacts from "../Contact"
import Avatar from "./Avatar";

export default () => {

  function createCard(contact) {
    return (
      <Card 
        key={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
      />
    )
  }

  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Avatar 
        img="data:image/png;base64,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"
      />

      {contacts.map(createCard)}

      {/*<Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />*/}
    </div>
  )
}