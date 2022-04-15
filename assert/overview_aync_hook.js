const async_hooks = require('async_hooks');

//Return the ID of the current execution context
const eid = async_hooks.executionAsyncId();

//return the ID of the handle responsible for triggering the callback of the current execution scope the call
const tid = async_hooks.triggerAsyncId();

//Create a new AsyncHook instance. All of these callbacks are optional
const asyncHook = async_hooks.createHook({ init, before, after , destroy, promiseResolve });

//must be enable after create asyncHook
//Allow callbacks of this asynchook instance to call.
// this is not an implicit action after running the construction, and must be explicity to begin executing callbacks.
asyncHook.enable();

// default after init asyncHook
// Disable Listening for new asyncronous events
asyncHook.disable();

//init is called during object construction. The resource may not have
//completed construction when this callback runs,therefor all fields of the resource referenced by "asyncid" may not have been populated.
function init( asyncId, type, triggerAsyncId, resource ){}

//Before is called just before the resource's callback is called. it can be called 0-N times for handles ( such as TCPWrap ).and will be called exactly 1 time for requests( such as FSReqCallback )
function before( asyncId ){}

//after is called just after the resources's callback has finished.
function after( asyncId ){}

//Destroy is called when rhe resource is destroyed.
function destroy( asyncId ) {}

//PromiseResolve is called only for promise resources, when the `resolves` constructor is invoked
//( either directly or through other means of resolving a promise )
function promiseResolve( asyncId ){}