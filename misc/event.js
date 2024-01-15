// import events module
import events from 'events'

// Create an eventEmitter object
let eventEmitter = new events.EventEmitter();

// eventEmitter.removeListener()

// Define handler
let onClickHandler = (error, data) => {
    if (!error)
        console.log('onClick: ' + JSON.stringify(data));
    else
        console.log(error);
    eventEmitter.emit("onreceived", 'para1',2,3);
}

// Bind event and evnt handler
eventEmitter.on('onclick', onClickHandler);
eventEmitter.on('onreceived', (...para)=>{
    console.log(para);
    console.log("onReceived");
});

// Fire the event
eventEmitter.emit("onclick", null, {data:'This is a test'});

// remove listener
eventEmitter.off("onclick", onClickHandler);
eventEmitter.emit("onclick", null, {data:'This is a test'});
