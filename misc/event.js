// import events module
import events from 'events'

// Create an eventEmitter object
let eventEmitter = new events.EventEmitter();

// Define handler
let onClickHandler = () => {
    console.log('onClick');
    eventEmitter.emit("onreceived");
}

// Bind event and evnt handler
eventEmitter.on('onclick', onClickHandler);
eventEmitter.on('onreceived', ()=>{
    console.log("onReceived");
});

// Fire the event
eventEmitter.emit("onclick");
