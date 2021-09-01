function siguiente(x, cont) {
  cont(x + 1);
}


function duplicar(x, cont) {
  cont(x * 2);
}

function inversa(x, cont) {
  if (x !== 0) {
      cont(1 / x);
  }
}

let imprimir = (x) => { console.log(x); };
var cuentaLoca = function(x, cont) {
  siguiente(x, function(y){
      inversa(y, function(z){
          duplicar(z, cont);
      })
  })
};

cuentaLoca(2, imprimir)
//0.6666

function componer1(f, g) {
  return function(x, cont) {
      g(x, function(y){
          f(y, cont);
      })
  }
}

var cuentaLocaCompuesta = componer1(duplicar, componer1(inversa, siguiente))
cuentaLocaCompuesta(2, imprimir)

function pipeline1(fs) {
  return fs.reduce(componer1);
}

var cuentaLocaPipelined = pipeline1([duplicar, inversa, siguiente])

cuentaLocaPipelined(2, imprimir)