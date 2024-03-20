
// ?===========================================> Leap Year Function System-01 <==========================================
function isLeapYear (year){
    const remainder = year % 4;
    if (remainder === 0){
        console.log('Your Year Is Leap Year',year);
    }
    else{
        console.log('Your Year Is Not Leap Year',year);
    }
}
isLeapYear (2024);


// ?===========================================> Leap Year Function System-02 <==========================================
function isLeapYear (year){
    const remainder = year % 4;
    if (remainder === 0){
        return true;
    }
    else{
       return false;
    }
}
const finalYear = isLeapYear (2024);
console.log('My Year Is:',finalYear);
const finalYears = isLeapYear (2025);
console.log('My Year Is:',finalYears);