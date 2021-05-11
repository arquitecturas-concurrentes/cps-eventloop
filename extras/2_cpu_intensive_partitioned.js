function asyncAvg(n, avgCB) {
    // acumulador para guardar el resultado a traves de las iteraciones
    var sum = 0;
    function help(i, cb) {
        sum += i;
        if (i == n) {
        cb(sum);
        return;
        }

        // por medio del timer setImmediate, planificamos la proxima operacion asincrónicamente.
        setImmediate(()=>help(i+1, cb))
    }

    // Start the helper, with CB to call avgCB.
    help(1, function(sum){
        var avg = sum/n;
        avgCB(avg);
    });
}


n = 5000
asyncAvg(n, function(avg){
    console.log('avg of 1-n: ' + avg);
});
