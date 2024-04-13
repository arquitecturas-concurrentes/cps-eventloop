function foo() {
    setTimeout(() => {
        throw new Error('Boom!!!!')
    }, 1000);
}
function bar() {
    foo();
}
function start() {
    bar();
}
start();