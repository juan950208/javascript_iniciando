let a = prompt("primer numero: ", 1);
let b = prompt("segundo numero: ", 2);

document.write( "respuesta con error = " + (a + b) + "<br>" );
document.write( "respuesta CORRECTA = " + (+a + +b) + "<br>");
//otra forma
document.write("respuesta CORRECTA = " + (Number(a) + Number(b)) + " utilizando Number(variable)");
