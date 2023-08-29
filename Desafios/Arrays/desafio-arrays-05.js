/*

05 - Encontre o filho mais velho

Dada a idade de Pedro e um array com as idades de três de seus filhos, escreva um algoritmo
que irá receber esses dados para computar e retornar a idade do filho mais velho de Pedro.

Considere as premissas abaixo:
* Pedro é pai de 4 filhos que têm idades diferentes;
* Esse ano ele notou que a soma da idade de seus filhos é igual à idade dele.

A saída deve ter o seguinte formato:
--------------------------------
"O filho mais velho tem x anos."
--------------------------------

*/

function findOldestSon(pedroAge, kidsAge){
  // Desenvolva seu código aqui.
  let message = "O filho mais velho tem "
  let ageOfAllKids = 0;
  let oldestSonAgeVerify = kidsAge[0];
  for (let i = 0; i < kidsAge.length; i += 1){
    
    if (oldestSonAgeVerify < kidsAge[i]) {
      oldestSonAgeVerify = kidsAge[i];
    }
    ageOfAllKids = kidsAge[i] + ageOfAllKids;
  }
  let oldestSonAge = pedroAge - ageOfAllKids;
  if (oldestSonAge <= oldestSonAgeVerify) {
    oldestSonAge = oldestSonAgeVerify;
  }
  return message + oldestSonAge + " anos."; // Retorne o resultado aqui
}

module.exports = findOldestSon;
