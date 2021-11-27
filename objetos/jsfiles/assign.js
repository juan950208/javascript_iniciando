let user = {
    name: "juan",
    id: "1234",
};


let permisions1 = {canRead: true};
let permisions2 = {canSet: false};

function showValues(object){

    for(let key in user){

        document.write(key + ": " + user[key] + "<br>");
    }
}

document.write("antes de los permisos<br>");
showValues(user);
Object.assign(user, permisions1, permisions2);
document.write("<br>despues de los permisos<br>");
showValues(user);

let user2 = Object.assign({}, user);
document.write("<br>user2, clonacion de user usando assign<br>");
showValues(user2);
