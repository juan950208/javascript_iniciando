let num1 = +prompt('ingrese el primer numero');
let num2 = +prompt('ingrese el segundo numero');

function calcMinimo(a, b){

    if(a == b){
        alert("son iguales");
    }else if(a > b){
        alert(a + " es mayor que " + b);
    }else{
        alert(b + " es mayor que " + a);
    }
}

calcMinimo(num1, num2);