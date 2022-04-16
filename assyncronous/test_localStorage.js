const http = require("http");

const { AsyncLocalStorage } = require("async_hooks");

const asyncLocalStorage = new AsyncLocalStorage();

function logWithId( msg ){
    const id = asyncLocalStorage.getStore();
    console.log(`${ id !== undefined ? id : '-'}:`, msg );
}

let idSeq = 0;
http.createServer((req,res) => {
    asyncLocalStorage.run( idSeq++, () => {
        logWithId('start');
        //Imagine any chain of async operations here
        setImmediate( () => {
            logWithId('finish');
            res.end();
        })
        
        // process.nextTick( () => {
        //     logWithId('finish');
        // })
        // logWithId('finish');
    })
}).listen(8080);

http.get('http://localhost:8080');
http.get('http://localhost:8080');
http.get('http://localhost:8080');
http.get('http://localhost:8080');