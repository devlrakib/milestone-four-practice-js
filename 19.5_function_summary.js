
// ? Function Summary
//function functionName (parameter){
    // function body
    // function return
//}
//var returnValue = functionName(parameter);

// function Practice number => 01 
function getAverage (assignment1, assignment2, assignment3){
   const total = assignment1 + assignment2 + assignment3 ;
   const average = total/3;
   return average;
}
const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;
var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('My Average So Far:', myAverage);


// function Practice number =>02
function add (num1, num2){
    const sum = num1+num2;
    return sum;
}
const result1 = add (12, 13);
const result2 = add (35, 12);
const finalResult = add (result1 + result2);
console.log('My Average So Far:', finalResult)
