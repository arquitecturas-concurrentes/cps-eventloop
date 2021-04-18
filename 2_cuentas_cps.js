//Falla y async
//Delay en depositar y transferir

class Transferencia {
  constructor(origen, destino, monto) {
    this.monto = monto;
    this.origen = origen;
    this.destino = destino;
  }

  ejecutar(cont) {
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
}

class Cuenta {
  constructor(saldoInicial) {
    this.monto = saldoInicial;
  }

  puedeExtraer(monto, cont) {
    setTimeout(() => {
      cont(this.monto >= monto);
    }, 0);
  }

  extraer(monto, cont) {
    setTimeout(() => {
      this.monto -= monto;
      cont();
    }, 0);
  }

  depositar(monto, cont) {
    setTimeout(() => {
      this.monto += monto;
      cont();
    }, 0);
  }
}

const cuentaA = new Cuenta(100);
const cuentaB = new Cuenta(50);
const transferencia1 = new Transferencia(cuentaA, cuentaB, 50);
const transferencia2 = new Transferencia(cuentaA, cuentaB, 60);
const transferencia3 = new Transferencia(cuentaB, cuentaA, 70);

transferencia1.ejecutar(() => {
  transferencia2.ejecutar(() => {
    transferencia3.ejecutar(() => console.log({ cuentaA, cuentaB }));
  });
});
