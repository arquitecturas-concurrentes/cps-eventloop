function buscador(criterios, cont, error) {
  inversa.inversa.inversa.inversa.inversa
}

function factorialDirecto(numero) {
  return factorialTailRec(numero, 1)
}

function factorialTailRec(n, parcial) {
  if (n === 0)
    return parcial
  else
    return factorialTailRec(n - 1, parcial * n)
}

function factorial(numero, cont) {
  if (numero === 0)
    cont(1)
  else
    factorial(numero - 1, (resultado) => {
      cont(resultado * numero)
    })
}

const criteriosDeBusqueda = {
  sonValidos: false
}

buscador(criteriosDeBusqueda,
  console.info,
  console.error
)
