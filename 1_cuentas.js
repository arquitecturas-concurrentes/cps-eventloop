
function Transferencia(origen, destino, monto) {
  this.monto = monto
  this.origen = origen
  this.destino = destino
}


Transferencia.prototype.ejecutar = function ejecutar() {
  if (this.origen.puedeExtraer(this.monto)) {
    this.origen.extraer(this.monto);
    this.destino.depositar(this.monto);
  }
};

function Cuenta(saldoInicial) {
  this.monto = saldoInicial
}

Cuenta.prototype = {
  puedeExtraer: function (monto) {
    return this.monto >= monto;
  },
  extraer: function (monto) {
    this.monto -= monto
  },
  depositar: function (monto) {
    this.monto += monto
  }
}

const a = new Cuenta(100);
const b = new Cuenta(50)
const transferencia1 = new Transferencia(a, b, 50);
const transferencia2 = new Transferencia(a, b, 60);
const transferencia3 = new Transferencia(b, a, 70);

transferencia1.ejecutar()
transferencia2.ejecutar()
transferencia3.ejecutar()

console.log({ a, b })