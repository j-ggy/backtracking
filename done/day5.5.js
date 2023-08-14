const oscar = {
    name: "Oscar",
    health: 1000,
    level: 1,
    class: "knight",
    getDamage: function() {
        const dmg = this.level * 10;
        return dmg;
    }
}

const imp = {
    name: "Imp",
    attack: 5,
    getDamage: function() {
        return this.attack;
    }
}
const panda = {
    name: "Pander",
    attack: 1,
    getDamage: function() {
        const panDamage = this.attack - (this.attack/2);
        return 1;
    }
}

const merlin = {
    name: "Merlin",
    health: 1000,
    level: 1,
    class: "warlock",
    pets: [panda, imp],
    getDamage: function() {
        let wizDamage = 0;
        for (i=0; i<=this.pets.length-1; i++) {
            wizDamage = wizDamage + this.pets[i].getDamage();
        }
        return wizDamage;
    }
}
console.log("merlin damage:")
console.log(merlin.getDamage())

function fight(char1, char2) {
    while (char1.health > 0 && char2.health > 0) {
        char1.health -= char2.getDamage();
        char2.health -= char1.getDamage();
    } if (char1.health > char2.health) {
        console.log(`${char1.name} wins!`)
    } else {
        console.log(`${char2.name} wins!`)
    }
}

fight(oscar, merlin);