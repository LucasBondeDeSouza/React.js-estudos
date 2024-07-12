import React from "react";
import Entry from "./Entry";
import emojipedia from "../Emojipedia.jsx"

export default () => {

  function createEntry(emojiTerm) {
    return (
      <Entry
        key={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        meaning={emojiTerm.meaning}
      />
    )
  }

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  )
}