let num = +prompt('ingrese el numero', 'numero');

document.write("numeros primos entre 1 y " + num + ": ")
primo: for(let i = 2; i <= num; i++){

    for(let j = 2; j < i; j++){
        
        if(i % j == 0) continue primo;
    }

    document.write(i + " ");
}

//aqui miraremos si es primo el numero dado
document.write("<br>");

let count = 0;
for(let i = 1; i <= num; i++){
    if(num % i == 0){
        count += 1;
    }
}

if(count == 2){
    document.write("El numero " + num + " es primo");
}else{
    document.write("el numero " + num + " no es primo");
}