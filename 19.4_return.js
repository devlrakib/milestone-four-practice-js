

function add (number1 , number2){
    console.log(number1, number2);
    var sum = number1+number2;
    console.log(sum);
    // console.log(sum);
}
add (15, 45)

// Return Function Javascript Code Practice
function bringSingara (money){
    var singaraPrice = 10;
    var quantity     = money/singaraPrice;
    return quantity;
}
var singaras = bringSingara(40);
console.log("Eating Singara",singaras);