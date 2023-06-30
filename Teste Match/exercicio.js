const numero = Number (prompt("Digite um número:"));
const numeroTitulo = document.getElementById ("Numero-Titulo");
const Texto = document.getElementById ("Texto");

numeroTitulo.innerHTML = numero;

Texto.innerHTML = ``;
Texto.innerHTML += `<p>Raiz quadrada ${numero ** 0.5}.</p>`;
Texto.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}`;
Texto.innerHTML += `<p> É NAN: ${Number.isNaN(numero)}</p>;`
Texto.innerHTML += `Arredondando para baixo: ${Number = Math.floor(numero)}`;
Texto.innerHTML += `<p>Arredondando para cima: ${Number = Math.ceil(numero)}</p>`;
Texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}.`;

