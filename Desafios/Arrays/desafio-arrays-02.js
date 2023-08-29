/*

02 - Encontre o menor número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o menor valor e o retorne.

*/

function getMinNumber(numbers) {
  // Desenvolva seu código nessa função
  let lowerNumber = numbers[0];

  for (let i = 0; i < numbers.length; i = i + 1) {
    let number = numbers[i];
    if (number < lowerNumber) {
      lowerNumber = number;
    }
  }

  return lowerNumber; // Retorne o resultado aqui
}

module.exports = getMinNumber;
