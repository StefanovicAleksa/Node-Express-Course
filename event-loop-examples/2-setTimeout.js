// Event Loop Code Examples

// task will be executed first completed -> second queued -> third completed -> second completed
console.log('first task');

setTimeout(() => {
    console.log("second task");
}, 0);

console.log('third task');