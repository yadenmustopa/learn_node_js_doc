const async_hooks = require("async_hooks");

class MyAsyncCallbacks {
    init( asyncId, type, triggerAsyncId, resource ){}
    destroy( asyncId ) {}
}

class MyaddedCallbacks extends MyAsyncCallbacks{
    before( asyncId ){}
    after( asyncId ){}
}

const asyncHook = async_hooks.createHook( new MyaddedCallbacks() );