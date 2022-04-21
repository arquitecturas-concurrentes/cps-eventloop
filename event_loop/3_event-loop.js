var a = 0;

for (let i = 0; i < 10000; i++) {
    setImmediate(() => a += 1); // esto genera un evento...
}

setTimeout(() => {
    console.log('hola estoy en el timeout...')
    console.log(a);
}, 3300);

console.log(a);