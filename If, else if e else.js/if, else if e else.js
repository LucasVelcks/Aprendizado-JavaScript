// if = PODE SER UTILIZADO SOZINHO
// SEMPRE QUE UTILIZO A PALAVRA ELSE, PRECISO DE UM IF ANTES
// POSSO TER VARIOS ELSE IF NA CHECAGEM
// SÓ POSSO TER UM ELSE NA CHECAGEM
// PODEMOS USAR CONDIÇÕES SEM ELSE IS, UTILIZANDO APENAS IS E ELSE

const hora = 90;

if (hora >= 0 && hora <= 11){
 console.log('Bom dia')
} else if(hora >= 12 && hora <=17){
 console.log('Boa tarde')
} else if (hora >= 18 && hora <= 23){
 console.log('Boa noite')
} else {
    console.log('Olá')
}

const tenhoGrana = false;

if (tenhoGrana) {
    console.log('Vou sair de casa')
}else {
    console.log('Não vou sair de casa')
}