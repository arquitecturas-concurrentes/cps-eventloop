const {
    Worker,
    isMainThread,
    parentPort,
    workerData
  } = require('worker_threads');
  
  if (isMainThread) {
    function AvgOffload(n) {
      return new Promise((resolve, reject) => {
        const worker = new Worker(__filename, {
          workerData: n
        });
        worker.on('message', (value) => {
          console.log(`received  value ${value} as return from worker thread`)
          resolve
        });
        worker.on('error', reject);
        worker.on('exit', (code) => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        });
      });
    };

    AvgOffload(500)
  } else {

    function asyncAvg(n, avgCB) {
      // Save ongoing sum in JS closure.
      var sum = 0;
      function help(i, cb) {
          sum += i;
          if (i == n) {
          cb(sum);
          return;
          }
  
          // "Asynchronous recursion".
          // Schedule next operation asynchronously.
          setImmediate(help.bind(null, i+1, cb));
      }
  
      // Start the helper, with CB to call avgCB.
      help(1, function(sum){
          var avg = sum/n;
          avgCB(avg);
      });
    }
    const n = workerData;
    
    asyncAvg(n, function(avg){
      console.log('avg of 1-n: ' + avg);
      parentPort.postMessage(avg);
    });
}

