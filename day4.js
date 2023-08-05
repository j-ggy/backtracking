function createUser(name, isAdmin, isYellow){
    const user = {
        name: name,
        isAdmin: isAdmin,
        isYellow: isYellow,
        roles: []
    }
    return user;
}

const joggy = createUser("joggy", false, false)
const ezpz = createUser("ezpz", true, true)
console.log(joggy)
console.log(ezpz)
function checkIfUserIsAdminAndYellow(user) {
    if (user.isAdmin && user.isYellow) {
        console.log("User is both admin and yellow")
    } else {
        console.log("user is not admin and yellow")
    }
}

checkIfUserIsAdminAndYellow(joggy);
checkIfUserIsAdminAndYellow(ezpz);

function addRoleToUser(user, newRole) {
    user.roles.push(newRole);
}

addRoleToUser(joggy, "jumper");
console.log(joggy)

function postMessage(user, text, parentMessage) {
    if (parentMessage) {
        const message = {
        user: user,
        text: text,
        parentMessage: parentMessage
        }
        return message;
    } else {
        const message = {
            user: user,
            text: text
        }
        return message;
    }
}

msg1 = postMessage(joggy, "first message")
msg2 = postMessage(ezpz, "nice!", msg1)

console.log(msg1)
console.log(msg2)
console.log("done")