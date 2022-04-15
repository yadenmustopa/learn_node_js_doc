const assert = require('assert');

const { message } = new assert.AssertionError({
    actual : 1,
    expected : 4,
    operator : 'strictEqual'
});

try{
    assert.strictEqual( 1, 4 );
}catch( err ){
    assert(err instanceof assert.AssertionError);
    assert.strictEqual(err.message, message );
    assert.strictEqual(err.name, 'AssertionError');

    console.log( { err } )
}
