let objeto = {};

function vacio(object){
    for(let key in object){
        //si empieza el ciclo es porque el objeto tiene valores
        return false;
    }
    return true;
}

document.write("antes de agregar la propiedad: " + vacio(objeto));
objeto.nombre = "juanchito";
document.write("<br>despues de agregar la propiedad: " + vacio(objeto));