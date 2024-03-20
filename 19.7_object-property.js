
var shoopingCart ={
    books    : 3,
    sunglass : 1,
    keyboard : 5,
    mouse    : 1,
    pen      : 25
}
// When You Know The Property name use dot notation. 
console.log(shoopingCart.books);

// 
// var penCount = shoopingCart['Pen'];
// console.log(penCount)


var properties = Object.keys(shoopingCart)
console.log(properties);
var propertieValue = Object.values(shoopingCart)
console.log(propertieValue);

var propertyName  = 'mouse';
var propertyValue = shoopingCart[propertyName]
console.log(propertyName,propertieValue);