/*

01 - Encontre o maior número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.

*/

function getMaxNumber(numbers) {
  // Desenvolva seu código nessa função
  let biggerNumber = numbers[0];

  for (let i = 0; i < numbers.length; i = i + 1) {
    let number = numbers[i];
    if (number > biggerNumber) {
      biggerNumber = number;
    }
  }

  return biggerNumber; // Retorne o resultado aqui
}

module.exports = getMaxNumber;