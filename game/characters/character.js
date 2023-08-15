class Character {
    constructor(name, className, attack, magic, defense, speed, health, mana) {
        this.name = name;
        this.className = className;
        this.attack = attack;
        this.magic = magic;
        this.defense = defense;
        this.speed = speed;
        this.health = health;
        this.mana = mana;
    }
    levelUp() {
        this.attack +=1;
        this.magic +=1;
        this.defense +=1;
        this.speed += 1;
        this.health += 10;
        this.mana += 10;
    }
}

module.exports = Character;