let user = {
    name: "juan",
    age: 26,
    address: "carrera 5 barrio calima",
    job: "software developer",
};

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };

for(let key in user){
    
    document.write(key + ": " + user[key] + "<br>");
}

document.write("<br>");

//javascript ordena porque las propiedades son enteros
for(let code in codes){
    document.write(codes[code] + "<br>");
}

