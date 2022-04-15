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

function func(){
    console.log('test');
}


function foo(){
    console.log('foo');
}

const callsfunc = tracker.calls( func, 2 );

let report = tracker.report();

console.log({ report });
// const callsfunc = tracker.calls( func );

// console.log( { callsfunc });




