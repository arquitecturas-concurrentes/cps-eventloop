console.log('1')
setTimeout(() => {
  console.log('setTimeout 1')
  process.nextTick(() => console.log('nextTick 1'))
  process.nextTick(() => console.log('nextTick 2'))
  process.nextTick(() => console.log('nextTick 3'))
}, 0)

setTimeout(() => console.log('setTimeout 2'), 0)
setImmediate(() => console.log('setImmediate 1'), 0)
setImmediate(() => console.log('setImmediate 2'), 0)
