const fs = require('fs');

//Comparandolo con puma

console.log('Antes de leer: ', Date.now());

fs.readFile('./SampleTextFile_8mb.txt', (err, contenido) => {
    console.log('1era leida: ', Date.now());
});

fs.readFile('./SampleTextFile_8mb.txt', (err, contenido) => {
    console.log('2da leida: ', Date.now());
});


