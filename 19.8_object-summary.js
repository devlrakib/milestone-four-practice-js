
//?Array Vs Object 
var shoopingItems = [ 'Books', 'Sunglass', 'Keyboard', 'Mouse'];
var friendAge     = [ 12, 15, 18, 20, 25, 30];
var friendAge     = {
     Tamim : 12,
     Sakib : 15,
     Riad  : 18, 
     Hasan : 20,
     Miraz : 30,
}

//?Object Looping 
var shoopingCart ={
    books    : 3,
    sunglass : 1,
    keyboard : 5,
    mouse    : 1,
    pen      : 25,
    Bottle   : 2,
}
//? Object Keys FindOut Technic:
const keys = Object.keys(shoopingCart);
console.log(keys);

//? Object Values FindOut Technic:
const values = Object.values(shoopingCart);
console.log(values);

//? Object For Loop FindOut Technic:
for ( var i = 0; i<keys.length; i++){
    //console.log(keys[i])
    var propertyName = keys[i];
    var propertyValue = shoopingCart[propertyName];
    console.log(propertyName, propertyValue )
}

//? Object For In Loop FindOut Technic:
for (var propertyName in shoopingCart){
    const value = shoopingCart[propertyName];
    console.log(propertyName,value);
}
