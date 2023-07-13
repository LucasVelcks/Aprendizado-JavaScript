// If = Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
// else = Se não faça isso {o código}

// TESTE DE BLOCO IF SEPARADO
if (1 === 1) {
console.log('O numero é verdadeiro');
}

const numero = 10;
if (numero >= 0 && numero <= 5) {
    console.log('O numero está entre 0 e 5');
} else if (numero >= 6 && numero <= 8) {
console.log('O numero está entre 6 e 8');
} else if (numero >= 9 && numero <=11) {
console.log('O numero está entre 9 e 11');
} else {
    console.log('O numero NÃO está entre 0 e 11');
}
console.log('O numero é 10');