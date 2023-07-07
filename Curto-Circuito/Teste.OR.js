const corUsuario = null;
const corPadrao = corUsuario || 'Azul';
console.log(corPadrao);

const corUsuario1 = 'cinza';
const corPadrao2 = corUsuario1 || 'Azul';
console.log(corPadrao2);

const a = null; 
const b = 'false';
const c = false;
const d = undefined;
const e = 0;
console.log(a || b || c || d || e );
