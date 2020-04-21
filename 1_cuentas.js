const cuenta1 = new Cuenta(100);
const cuenta2 = new Cuenta(50);

const transferencia1 = new Transferencia(a, b, 50); //a: 50, b: 100
const transferencia2 = new Transferencia(a, b, 60); //No se realiza
const transferencia3 = new Transferencia(b, a, 70); //a: 120, b:30

transferencia1.ejecutar();
transferencia2.ejecutar();
transferencia3.ejecutar();

console.log({ cuenta1, cuenta2 });
