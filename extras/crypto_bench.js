const crypto = require('crypto');

function run(iterations) {
  const syncCaseResults = {};
  
  console.log(`\n
  -----------| VERSION SINCRÓNICA |-----------
  `);
  
  for (let i = 0; i < iterations; i++) {
    console.log(`  Iteracion n ${i + 1}`);
    syncCaseResults[i + 1] = { start: Date.now() };
    const key = crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
    syncCaseResults[i + 1].end = Date.now();
    console.log(`  Key: ${key.toString('hex')}`);
  }
  
  const asyncCaseResults = {};
  
  console.log(`\n
  -----------| VERSION ASINCRÓNICA |-----------
  `);
  
  for (let i = 0; i < iterations; i++) {
    asyncCaseResults[i + 1] = { start: Date.now() };

    crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
      if (err) {
        throw err;
      } 
      
      console.log(`  Iteracion n ${i + 1}`);
      console.log(`  Key: ${derivedKey.toString('hex')}`);
      asyncCaseResults[i + 1].end = Date.now();
    });
  }
  
  setTimeout(() => {
  console.log(`\n
  -----------| RESULT |-----------
  `);
  
  console.log(`  CASE 1: Versión sincrónica`);
  printIterationTimestamps(syncCaseResults);
  
  console.log(`\n  CASE 2: Versión asincrónica`);
  printIterationTimestamps(asyncCaseResults);
  console.log('\n');
  }, 5000);
}

function printIterationTimestamps(result) {
  let ref = null;
  Object.keys(result).forEach((key) => {
    if (key === '1') {
      ref = result[key].start;
    }
    
    const start = key === '1' ? 0 : result[key].start - ref;
    const end = result[key].end - ref;

    console.log(`  Iteracion ${key}, empezo en ${start} y termino ${end}`);
  });
}

if (process.argv && process.argv.length !== 3) {
  throw new Error('Invalida cantida de argumentos (Se espera que se pase el numero de iteraciones)');
} else {
  run(parseInt(process.argv[2], 10));
}