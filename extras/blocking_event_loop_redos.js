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

app.listen(port, () => {
    console.log(`JSON DoS app listening at http://localhost:${port}`)
})