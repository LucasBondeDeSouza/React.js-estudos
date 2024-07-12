import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

import "../../public/style.css"

export default () => {

  return (
    <div>
      <Header />
      {notes.map(noteItem => (
          <Note 
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
          />
        )
      )}
      <Footer />
    </div>
  )
}