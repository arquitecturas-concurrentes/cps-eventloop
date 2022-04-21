const fs = require('fs');

//Comparandolo con puma

fs.readFile('./SampleTextFile_500kb.txt', (err, contenido) => {
    console.log(Date.now());
});

fs.readFile('./SampleTextFile_500kb.txt', (err, contenido) => {
    console.log(Date.now());
});


