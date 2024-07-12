var numbers = [3, 56, 2, 48, 5]

// Map - Crie um novo array fazendo algo com cada item de um array.
const newNumbers = numbers.map(x => x * 2)
// console.log(newNumbers) -> [6, 112, 4, 96, 10]


// Filter - Crie um novo array mantendo os itens que retornam verdadeiros.
const newNumbers2 = numbers.filter(num => num < 10)
// console.log(newNumbers2) -> [3, 2, 5]


// Reduce - Acumule um valor fazendo algo em cada item de um array.
const newNumbers3 = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber
})
// console.log(newNumbers3) -> 114


// Find - Encontre o primeiro item que corresponde a um array.
const newNumbers4 = numbers.find(num => num > 10)
// console.log(newNumbers4) -> 56


// FindIndex- Encontre o índice do primeiro item que corresponde.
const newNumbers5 = numbers.findIndex(num => num > 10)
// console.log(newNumbers5) -> 1