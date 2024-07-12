import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import "../../public/style.css"

export default () => {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  )
}