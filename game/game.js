const Pirate = require("./characters/pirate.js")
const Carnie = require("./characters/carnie.js")
const Wanderer = require("./characters/wanderer.js")


const pirate1 = new Pirate("Erik", "Pirate", 7, 2, 4, 5, 110, 70);
const carnie1 = new Carnie("Sliver", "Carnie", 4, 5, 6, 3, 100, 60);
const wanderer1 = new Wanderer("Devin", "Wanderer", 4, 4, 3, 6, 100, 100)

console.log(pirate1) 
console.log(carnie1)
console.log(wanderer1)