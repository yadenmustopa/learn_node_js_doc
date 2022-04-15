const assert = require('assert/strict');

await assert.rejects( 
    async()=>{
        throw new TypeError('Wrong Value');
    },
    (err) => {
        assert.strictEqual( err.name , 'TypeError');
        assert.strictEqual( err.message, "Wrong Value ");
        return true;
    }
)