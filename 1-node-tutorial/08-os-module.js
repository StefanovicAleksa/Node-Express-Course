//OS Module (Built in module)

const os = require('os');

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime} ms`);


// system info (example not all)
const currentOS = {
    name: os.type(),
    release: os.release(),
    freeMem: os.freemem()
};

console.log(currentOS);