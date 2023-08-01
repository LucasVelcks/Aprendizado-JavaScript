const pontuação = 1000;
const nivelUsuario = pontuação >= 1000 ? 'Usuario VIP' : 'Usuario comum';
/* if (pontuação >= 1000) {
    console.log('Usuario VIP')
} else {
    console.log('Usuario comum')
}*/
const calsseUsuario = null;
const Usuario = calsseUsuario || 'Classe alta'
console.log(nivelUsuario, Usuario);