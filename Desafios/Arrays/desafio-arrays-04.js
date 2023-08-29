/*

04 - Verifique se todos os dados de uma lista são do mesmo tipo

Escreva uma algoritmo que recebe um array de dados quaisquer e verifique se todos são do mesmo tipo.

Se todos forem retorne:
------
true
------

Caso contrário:
-------
false
-------

Obs: Os retornos tem que ser dados do tipo boolean.

*/

function dataType(types){
  // Desenvolva seu código aqui.
  const typeOfFirst = typeof types[0];

  for (let elements of types) {
    if (typeOfFirst !== typeof elements) {
      return false;
    }
  }
  
  return true;
}

module.exports = dataType;
