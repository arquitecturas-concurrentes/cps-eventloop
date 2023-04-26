function contar() {
    console.log('1');
    setTimeout(function callback() {
        console.log("2");
    }, 5000)
    console.log("3");
}
contar();