console.log('Hi !');
setImmediate(() => console.log('Now'));
setImmediate(() => console.log('Now 1'));
process.nextTick(() => console.log('Hello'));
setImmediate(() => console.log('Now 2'));
setImmediate(() => console.log('Now 3'));
setTimeout(() => console.log('eventu'), 4000);
console.log('world');
console.log('world 2');