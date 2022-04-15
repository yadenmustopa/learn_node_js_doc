// const assert = require("assert");

// const tracker = new assert.CallTracker();

// function func(){}

// //callsfunc() must be called exactly 1 time before tracker.verify().
// const callsfunc = tracker.calls( func, 1 );

// callsfunc();

// process.on('exit', () => {
//     tracker.verify();
// })

// //

const assert = require('assert');

const tracker = new assert.CallTracker();
const tracker2 = new assert.CallTracker();

function func(){
    console.log('test');
}


function foo(){
    console.log('foo');
}


const callsfunc = tracker.calls( func, 2 );
const callsfoo = tracker2.calls( foo, 3 );


callsfunc();
// let report = tracker.report();// message: 'Expected the func function to be executed 2 time(s) but was executed 0 time(s).',
// report : [{actual: 0,
// expected: 2,
// operator: 'func',
// stack: Error
//     at CallTracker.calls (node:internal/assert/calltracker:43:19)
//     at Object.<anonymous> (C:\temp\github\learn_node_js_doc\assert\call_tracker.js:31:27)
//     at Module._compile (node:internal/modules/cjs/loader:1099:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
//     at Module.load (node:internal/modules/cjs/loader:975:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)     
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
//     at node:internal/main/run_main_module:17:47
// }]

// console.log({ report });
// const callsfunc = tracker.calls( func );

// console.log( { callsfunc });


callsfunc();
callsfoo();
callsfoo();
callsfoo();

let verify = tracker.verify();
let verify2 = tracker2.verify();

console.log({ verify, verify2 });




