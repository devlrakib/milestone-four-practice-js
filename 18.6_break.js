
// ?=======================================================> Break loop Js Code <========================================================
// Javascript For Loop Using Break And Continue Statement in 2k24
for (var i = 1; i <= 20; i++){
    console.log(i);
    if (i > 10){
        break;
    }
}


//  Practice 02
var roastGiven = 0;
while (roastGiven < 10){
    console.log('Roast Den, Gift Item Anci');
    console.log(roastGiven);
    roastGiven++;
    if(roastGiven > 2){
        break;
    }
}

//  Practice 03
var items = ['Bottle', 'Glass', 'Mouse', 'Keyboars'];
for (var i = 0; i <items.length; i++){
    var item = items[i];
   
    console.log(item); 
    if (item == 'Mouse'){
        break;
    }
}

// ?=======================================================> Continue loop Js Code <========================================================
var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41]
for (var i = 0; i<numbers.length; i++){
    var number = numbers[i];
    if (number > 50){
        continue;
    }
    console.log(number);
}


