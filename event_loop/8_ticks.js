setImmediate(() => console.log('2'));

process.nextTick(() => console.log('3'));

setTimeout(() => console.log('4'), 10);

console.log(1);
