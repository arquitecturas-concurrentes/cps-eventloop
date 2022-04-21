const fs = require('fs');

fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log('timeout');
    }, 0);
    setImmediate(() => {
        console.log('immediate');
    });
});


// $ node timeout_vs_immediate.js
// immediate
// timeout
//
// $ node timeout_vs_immediate.js
// immediate
// timeout

