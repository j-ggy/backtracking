const Character = require("./character");
const bbGun = require("../abilities/bbgun.js")

class Carnie extends Character {
    constructor(name, className, attack, magic, defense, speed, health, mana) {
        super(name, className, attack, magic, defense, speed, health, mana);
        this.abilities = [bbGun];
    }
}

module.exports = Carnie;