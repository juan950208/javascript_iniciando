function pow(x, n){
    let resul = 1;
    
    for(let i = 0; i < n; i++){
        resul *= x;
    }

    return resul;
}

describe("pow", function(){

    describe ("eleva x a la potencia de 3", function(){

        function makeTest(x){
            let expected = x * x * x;
            it(`${x} elevado a la 3 es ${expected}`, function(){
                assert.equal(pow(x, 3), expected);
            });
        }
    
        for(let x = 1; x <= 5; x++){
            makeTest(x);
        }

    });
   
});

