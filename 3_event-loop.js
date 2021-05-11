var a = 0;

for (let i = 0; i < 10000; i++) {
    setTimeout(() => a += 1, 0);
}

console.log(a);
