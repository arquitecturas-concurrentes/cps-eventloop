//Falla y async
//Delay en depositar y transferir


function Transferencia(origen, destino, monto) {
    this.monto = monto;
    this.origen = origen;
    this.destino = destino;
}

Transferencia.prototype.ejecutar = function ejecutar(cont) {
    this.origen.puedeExtraer(this.monto, (puede) => {
        if (puede) {
            this.origen.extraer(this.monto, () => {
                this.destino.depositar(this.monto, cont);
            });
        } else {
            cont();
        }
    });
};

function Cuenta(saldoInicial) {
    this.monto = saldoInicial;
}

Cuenta.prototype = {
    puedeExtraer: function (monto, cont) {
        setTimeout(() => {
            cont(this.monto >= monto);
        }, 0);
    },
    extraer: function (monto, cont) {
        setTimeout(() => {
            this.monto -= monto;
            cont();
        }, 0);
    },
    depositar: function (monto, cont) {
        setTimeout(() => {
            this.monto += monto;
            cont();
        }, 0);
    },
};

const a = new Cuenta(100);
const b = new Cuenta(50);
const transferencia1 = new Transferencia(a, b, 50);
const transferencia2 = new Transferencia(a, b, 60);
const transferencia3 = new Transferencia(b, a, 70);

transferencia1.ejecutar(() => {
    transferencia2.ejecutar(() => {
        transferencia3.ejecutar(() => console.log({ a, b }));
    });
});
