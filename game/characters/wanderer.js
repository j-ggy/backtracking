const Character = require("./character");
const knifeSurpise = require("../abilities/knifeSurpirse")

class Wanderer extends Character {
    constructor(name, className, attack, magic, defense, speed, health, mana) {
        super(name, className, attack, magic, defense, speed, health, mana);
        this.abilities = [knifeSurpise]
    }
}

module.exports = Wanderer;