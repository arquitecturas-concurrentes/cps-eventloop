class Transferencia {
  constructor(origen, destino, monto) {
    this.monto = monto;
    this.origen = origen;
    this.destino = destino;
  }

  ejecutar() {
    this.origen.puedeExtraer(this.monto, (puede) => {
      if (puede) {
        this.origen.extraer(this.monto);
        this.destino.depositar(this.monto);
      }
    })
  }
}

class Cuenta {
  constructor(saldoInicial) {
    this.monto = saldoInicial;
  }

  puedeExtraer(monto, cont) {
    setTimeout(() => {
      cont(this.monto >= monto);
    }, randomEntre(25, 500));
  }

  extraer(monto) {
    this.monto -= monto;
  }

  depositar(monto) {
    this.monto += monto;
  }
}

const cuentaA = new Cuenta(100);
const cuentaB = new Cuenta(50);
const transferencia1 = new Transferencia(cuentaA, cuentaB, 50);
const transferencia2 = new Transferencia(cuentaA, cuentaB, 60);
const transferencia3 = new Transferencia(cuentaB, cuentaA, 70);

transferencia1.ejecutar();
transferencia2.ejecutar();
transferencia3.ejecutar();

setTimeout(() => console.log({ cuentaA, cuentaB }), 2000);

function randomEntre(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}