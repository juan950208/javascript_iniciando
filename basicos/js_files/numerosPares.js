document.write("mostrar los numeros pares del 2 al 10 usando for: <br>");

for(let i = 1; i < 11; i++){
    if(i % 2) continue;
    document.write(i + " ");
}

document.write("<br> <br> mostrar numeros usando while: <br>");

let i = 0;
while(i < 3){
    document.write("numero " + i + "<br>");
    i++;
}

