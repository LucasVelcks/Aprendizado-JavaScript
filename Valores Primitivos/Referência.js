let a = [1, 2, 3];
let b = [...a];
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(b);
console.log(a, b);

