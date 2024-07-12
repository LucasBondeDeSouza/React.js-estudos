import React from "react";

import cars from "../pratice"
import animals, { useAnimals } from "../data"

export default () => {

  // Desetruturando Arrays
  // const [cat, dog] = animals

  // const [animal, makeSound] = useAnimals(cat)

  // Desestruturando Objetos
  // const { name, sound } = cat
  // const { name: catName, sound: catSound } = cat
  // const { name = "Fluffy", sound = "Purr" } = cat
  // const { feedingRequirements: {food, water} } = cat

  const [honda, tesla] = cars

  const { speedStats: {topSpeed: hondaTopSpeed} } = honda
  const { speedStats: {topSpeed: teslaTopSpeed} } = tesla

  const { coloursByPopularity: [hondaTopColour] } = honda
  const { coloursByPopularity: [teslaTopColour] } = tesla
  
  return (
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
  )
}