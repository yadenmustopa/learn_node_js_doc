const fs = require('fs');
const util = require('util');

function debug( ...args){
    //use a function like this one when debugging inside an AsyncHooks callback
    fs.writeFileSync('log.out',`${util.format(...args)}\n`,{ flag : 'a'});
}