let count = 0;


setTimeout( () => console.log('setTimeout executed'), 1000 );
setImmediate( () => console.log('setItemmediate is called'));

const cb = () => {
    console.log(`Processing nextTick cb ${++count}`)

    if( count === 200 ) return;
    process.nextTick(cb);
}
process.nextTick( cb )

console.log('Start');