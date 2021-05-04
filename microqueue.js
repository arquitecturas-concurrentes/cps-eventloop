setImmediate(() => console.log('Esto se ejecuta al final'));

process.nextTick(() => {
    console.log('Me ejecuto primero');
    process.nextTick(() => {
        console.log('...en segundo lugar vengo yo...');
        process.nextTick(() => {
            console.log('...inmediatamente tercero estoy yo...');
            process.nextTick(() => {
                console.log('...antes del final estoy aca...');
            });
        });
    });
});

const avisador = (finalmente) => {
    const valores = [];
    return (valor) => {
        valores.push(valor);
        if (valores.length >= 2) {
            const [v1, v2] = valor;
            finalmente(v1, v2);
        }
    };
};

function hacerAlgo(cont, errCont) {
    let noFallo = true;
    const avisador = avisador(cont);

    request((err, res1) => {
        if (err) {
            if (noFallo) {
                errCont(err);
                noFallo = true;
            }
        }
        avisador(res1.valor);
    });

    request((err, res2) => {
        if (err) {
            if (noFallo) {
                errCont(err);
                noFallo = true;
            }
        }
        avisador(res2.valor);
    });
}
