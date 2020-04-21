var a = 0;

for (let i = 0; i < 10000; i++) {
    setImmediate(() => a += 1);
}

console.log(a);
