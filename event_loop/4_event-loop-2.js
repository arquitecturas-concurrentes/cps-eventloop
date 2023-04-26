let a = 0;

for (let i = 0; i < 10000; i++) {
    setTimeout(() => a += 1, 0); // esto genera un evento...
}

setTimeout(() => {
    console.log('Dentro del setTimeout a vale: ', a);
}, 3300);

console.log('Fuera del setTimeout a vale: ', a);