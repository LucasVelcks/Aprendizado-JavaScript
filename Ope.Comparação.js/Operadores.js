// > (Maior que)
// >= (Maior que ou igual a)
// < (Menor que)
// <= (Menor que ou igual a)
// == (igualdade) - Checa valor *NÃO RECOMENDAVEL*
// === (igualdade estrita) - Checa valor e tipo
// != (diferente) - Checa valor *NÃO RECOMEDAVEL*
// !== (diferente estrito) Checa valor e tipo

//checando se um número é maior que o outro.(EXPRESSÃO > ).
console.log(10>5); //10 é maior que 5? se sim aparecerá true, caso não seja, aparecerá false

//usando expressão para o mesmo resultado do código acima
const comp = 10 > 5;
console.log(comp);

//checando se um número é maior ou igual ao outro.(EXPRESSÃO >= ).
const comp = 10 >= 11; //10 é maior ou igual a 11? se sim aparecerá true, caso não seja, aparecerá false
console.log(comp);

//as expressões (<) e (<=) são bem parecidas com as dos exemplos acima, elas são para indetificar se um número é menor ou igual ao outro. 

//exemplificando com variaveis separadas
const num01 = 11;
const num02 = 12;
const comp = num01 < num02 ; //11 é menor que 12? se sim aparecerá true, caso não seja, aparecerá false
console.log(comp); 

//Checando se os valores são do mesmo tipo.
const num1 = 10; // Number
const num2 = '10'; // String
const comparação = num1 === num2; // (==) NÃO DIFERENCIA O TIPO, ASSIM COMO (!=).
console.log(comparação); // O valor do num1 é do mesmo tipo do num2? se sim aparecerá true, caso não seja, aparecerá false

//Checando se os valores são de tipos diferentes.
const num1 = 10; // Number
const num2 = '10'; // String
const comparação = num1 === num2; 
console.log(comparação);
