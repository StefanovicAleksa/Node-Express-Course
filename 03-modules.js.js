// ComonJS, every file is modeule (by default)
// Modules Encapsulated Code (only share minimum)

//Modules

const people = require('./4-people.js');

const {sayHi} = require('./5-utils.js');

const data = require('./6-alternative-flavor.js');

require('./7-mind-grenade.js');

console.log(data);

sayHi(people.people[0].name);