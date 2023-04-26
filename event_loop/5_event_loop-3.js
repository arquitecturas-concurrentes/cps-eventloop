const inicio = Date.now();

console.log('Empezó');
setTimeout(() => console.log(`pasaron ${Date.now() - inicio} ms`), 100);
console.log('Terminó');

let a = 0
while (a < 10000000000) {
    a = a + 1
}