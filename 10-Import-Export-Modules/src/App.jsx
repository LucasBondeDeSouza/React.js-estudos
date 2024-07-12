import React from "react";
import PI, {doublePi, triplePi} from "./Math";

export default () => {
  return (
    <ul>
      <li>{PI}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
  )
}