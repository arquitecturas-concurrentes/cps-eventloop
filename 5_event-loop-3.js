// event-loop-3
const inicio = Date.now();

console.log('Empezó');
setTimeout(() => console.log(`pasaron ${Date.now() - inicio} ms`), 100);
console.log('Terminó');

var a = 0
while (true) { 
    a = a + 1
}
