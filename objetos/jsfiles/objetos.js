let user = {
    name: "juan",
    age: 26,
    height: 70,
};

alert(user.name);

//agregamos una propiedad al objeto
user.isAdmin = true;
user.ciudad = "cali";

document.write("nuevas propiedades de user -> " + user.isAdmin + " " + user.ciudad);

//eliminar una propiedad
//delete user.name;

//preguntar que dato quiere conocer
let key = prompt("que quiere saber de user", "name");
alert(user[key]);