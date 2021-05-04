const express = require('express')
const app = express()
const port = 3000

app.get('/redos-me', (req, res) => {
    let filePath = req.query.filePath;

    // REDOS
    if (filePath.match(/(\/.+)+$/)) {
        console.log('valid path');
    }
    else {
        console.log('invalid path');
    }

    res.sendStatus(200);
});


// /redos-me  es un ejemplo que se va a bloquear si le pasamos un path lo suficientemente largo
// ej.. un path largo puede ser a/b/c/c/whuwqhwue/w/q///djjqjwj/a/d/f/e/q/wwwwfks/qo2/a
app.listen(port, () => {
    console.log(`JSON DoS app listening at http://localhost:${port}`)
})