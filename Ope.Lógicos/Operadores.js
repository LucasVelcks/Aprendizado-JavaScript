/*  
&& = AND = E - TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE
|| = OR = OU - SE QUALQUER UMA DAS EXPRESSÕES FOR VERDADEIRA O RESULTADO SERÁ TRUE
! = NOT = NÃO - INVERTE OS VALORES
*/

const usuario = 'Lucas'; // form usuario digitou
const senha = '12345'; // form usuario digitou

const VaiLogar1 = usuario === 'Lucas' && senha === '12345'; // TRUE
console.log(VaiLogar1);

const VaiLogar2 = usuario === 'Lucas' && senha === '1234';  // FALSE
console.log(VaiLogar2);