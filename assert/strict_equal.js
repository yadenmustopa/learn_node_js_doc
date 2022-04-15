const assert = require('assert/strict');

try { 
    let test = assert.strictEqual( 1, 2 );

    console.log({ test });
}catch( err ){
    // assert.strictEqual( err.nam)
}
