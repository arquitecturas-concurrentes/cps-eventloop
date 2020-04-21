setImmediate(() => console.log('this happens LAST'));

process.nextTick(() => {
    console.log('all of these...');
    process.nextTick(() => {
        console.log('...happen before...');
        process.nextTick(() => {
            console.log('...the immediate ever...');
            process.nextTick(() => {
                console.log('...has a chance to resolve');
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
