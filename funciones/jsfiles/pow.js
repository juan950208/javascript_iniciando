function potencia(num1, num2){

    let a = num1;
    for(let i = 2; i <= num2; i++){
        a = a * num1;
    }

    return a;
}

let x = +prompt("numero 1");
let n = +prompt("numero 2");


if(n <= 0){
    alert("LA POTENCIA NO DEBE SER MENOR QUE 1");
}else{
    document.write("<br>" + x + "^" + n + " = " +potencia(x, n));
}