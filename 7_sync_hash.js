process.env.UV_THREADPOOL_SIZE = 6;

const { pbkdf2Sync, pbkdf2 } = require('crypto');

const VECES = 6;

let inicio = Date.now();
for (let i = 0; i < VECES; i++) {
    pbkdf2Sync('pwd', 'salt', 100000, 512, 'sha512');
    console.log(`Done in ${Date.now() - inicio}ms`);
}


inicio = Date.now();
for (let i = 0; i < VECES; i++) {
    pbkdf2('pwd', 'salt', 100000, 512, 'sha512', () => {
        console.log(`Done in ${Date.now() - inicio}ms`);
    });
}
