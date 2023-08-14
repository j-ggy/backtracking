class Pet {
    constructor(name, damage, damageType) {
        this.name = name;
        this.damage = damage;
        this.damageType = damageType;
        this.level = 1;
    }

    getDamage() {
        return this.damage;
    }
}

const pet = new Pet("small toy", 20, "magic");

console.log(pet); 

class Warlock {
    constructor(name, pets) {
        this.name = name;
        this.level = 1;
        this.pets = pets;
    }
}

const warlock1 = new Warlock("merlin", [pet])
console.log(warlock1);