// 
// const myInches = 12;
// const myFeet   = myInches / 12;
// console.log(myFeet);

// 
// const dadaInches = 144;
// const dadafeet   = dadaInches / 12;
// console.log('Dada Feet:',dadafeet);

// 

function inchesToFeet (inches){
  const feet = inches / 12;
  return feet;
}
const dadaInches = 144;
const dadafeet = inchesToFeet(dadaInches);
console.log(dadafeet)


// 
function milesToKiloMeter (miles){
    const kiloMeter = miles * 1.609;
    return kiloMeter;
}
const  milesName = milesToKiloMeter(100);
console.log(milesName);