// timeout_vs_immediate.js


setTimeout(() => console.log('timeout'), 0);

setImmediate(() => console.log('immediate'));

// $ node timeout_vs_immediate.js
// timeout
// immediate
//
// $ node timeout_vs_immediate.js
// immediate
// timeout
