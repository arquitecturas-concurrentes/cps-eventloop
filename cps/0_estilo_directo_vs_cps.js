function succesor(n) {
  return n + 1;
}

function succesorCont(x, continuacion) {
  continuacion(succesor(x));
}

succesorCont(2, (y) => {
  console.log(y)
});

//------------------

function inversa(x, cont) {
  if (x !== 0) {
    cont(1 / x);
  }
}

//------------------

function inversaSiguiente(x, cont) {
  succesorCont(x, (siguienteDeX) => {
    inversa(siguienteDeX, cont)
  });
}

inversaSiguiente(1, (y) => {
  console.log(y)
});