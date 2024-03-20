==================================================================> <=======================================================
// ?isEven Javascript Coding serial Number => 01
function isEven (number){
    const remainder = number % 2;
   // console.log(remainder);
   if (remainder === 0){
    console.log('Number Is Even');
   }
   else{
    console.log('Number id odd');
   }
}
isEven(40)

==================================================================> <=======================================================
// ?isEven Javascript Coding serial Number => 02
function isEven (number){
    const remainder = number % 2;
   // console.log(remainder);
   if (remainder === 0){
    return true;
   }
   else{
    return false;
   }
}
const myNumberEven = isEven(40);
console.log(myNumberEven);
const herNumberEven = isEven(41);
console.log(herNumberEven);