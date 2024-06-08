// Event emitter

const EventEmitter = require('events'); //common practice name

const customEmitter = new EventEmitter();

// simillar to event handlers. setting event listener on event (response for example)
customEmitter.on('response', ({name, age}) => {
    console.log(`data received:\nName: ${name}\nAge: ${age}`);
});

customEmitter.on('response', () => {
    console.log(`function 2`);
}); // we can have as many event listeners for tthe same event and all will be activated once event occurs

// emitting an event (response for example). emit has to be after the listen
customEmitter.emit('response', {name: 'john', age: 34}); //don't have to be in object form