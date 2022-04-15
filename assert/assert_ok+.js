const assert = require('assert/strict');

let ok1 = assert.ok( true );

console.log( ok1 )

let not_equal = assert.ok( typeof 123 === 'string' );

let zero = assert.ok( 0 );
console.log( zero );

