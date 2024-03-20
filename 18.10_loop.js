// ?=================================> Loop Practice Assesments  <============================
/*
# 01. Display: Ajke Amar Mon Valo Nai For 39 Times 
# 02. Display Number Between 58 To 98
# 03. Show All even Number 412 to 456
# 04. Show All odd Number 581 to 623
# 05. Differce While Loop And For Loop
# 06. Declare An Array for All the topics that you have learned last few days
# 07. Create An Array for all the mobile Phones. Display All the elements of the using while loop.
# 08. Run a Loop 30 to 86. this loop will stop if the value get higher than 44.
# 09. Right The Book Price of the books that you have. Display the prices if the prices is lower than 200. 
*/

// ?=================================> Practice Number-01 (Display: Ajke Amar Mon Valo Nai For 39 Times) <============================
for(var i = 0; i <= 39; i++){
    console.log(i);
    console.log('Ajke Amar Mon Valo Nai');
}
// ?=================================> Practice Number-02 (Display Number Between 58 To 98) <============================
for (var i = 58; i <= 98; i++){
    console.log(i);
}
// ?=================================> Practice Number-03 (Show All even Number 412 to 456) <============================
var number = 412;
while (number <= 456){
    console.log(number);
    number+=2;
}
// ?=================================> Practice Number-04 (Show All odd Number 581 to 623) <============================
var number = 581;
while (number <= 623){
    console.log(number);
    number+=2
}
// ?=================================> Practice Number-05 (Differce While Loop And For Loop) <============================
// ?===============> # For Loop In Javascript <=============
for (var i = 0; i < 10; i++){
    console.log('This is Our For Loop Using In Javascrip Code');
    console.log(i);
}

// ?===============> # While Loop In Javascript <=============
var price = 0;
while (price <= 20){
    console.log("This is While Loop And For Loop Differnce");
    console.log(price);
    price++;
}

// Includes Js Code 
var Name = 'Tamim Iqbal opener';
var Naming = Name.includes('Iqbal');
console.log(Naming);