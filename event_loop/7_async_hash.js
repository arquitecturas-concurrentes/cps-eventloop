process.env.UV_THREADPOOL_SIZE = 6;

const { pbkdf2 } = require('crypto');

const VECES = 6;

inicio = Date.now();
for (let i = 0; i < VECES; i++) {
    pbkdf2('pwd', 'salt', 100000, 512, 'sha512', () => {
        console.log(`Done in ${Date.now() - inicio}ms`);
    });
}
