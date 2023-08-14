// restarted game

// function createCharacter(name, level, health, isMag, attack, magic) {
//     const char = {
//         name: this.name,
//         level: this.level,
//         health: this.health,
//         attack: this.attack,
//         magic: this.magic,
//         getDamage: function() {
//             if (this.isMag) {
//                 return this.magic;
//             } else {
//                 return this.attack;
//             }
//         },
//         levelUp: function() {
//             this.level = this.level +1;
//         }
//     }
//     return char;
// }

const oscar = {
    name: "Oscar",
    level: 1,
    health: 100,
    attack: 7,
    isMag: false,
    getDamage: function() {
        if(this.isMag) {
            return this.magic;
        } else {
            return this.attack;
        }
    },
    levelUp: function() {
        this.level += 1;
    }
}
const merlin = {
    name: "Merlin",
    level: 1,
    health: 100,
    attack: 1,
    magic: 8,
    isMag: true,
    getDamage: function() {
        if(this.isMag) {
            return this.magic;
        } else {
            return this.attack;
        }
    },
    levelUp: function() {
        this.level += 1;
    }
}

console.log(oscar)
console.log(merlin)

merlin.levelUp();
console.log(merlin);