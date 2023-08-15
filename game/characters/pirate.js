const Character = require("./character");
const cannonBall = require("../abilities/cannonBall.js")

class Pirate extends Character {
    constructor(name, className, attack, magic, defense, speed, health, mana) {
        super(name, className, attack, magic, defense, speed, health, mana);
        this.abilities = [cannonBall]
    }
}

module.exports = Pirate;