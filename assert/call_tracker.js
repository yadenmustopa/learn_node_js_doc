const assert = require("assert");

const tracker = new assert.CallTracker();

function func(){}

//callsfunc() must be called exactly 1 time before tracker.verify().
const callsfunc = tracker.calls( func, 1 );

callsfunc();

process.on('exit', () => {
    tracker.verify();
})

//




output :
test
test
foo
foo
foo
{ verify: undefined, verify2: undefined }

// const assert = require('assert/strict');

// let ok1 = assert.ok(false);
// console.log({ ok1 });



