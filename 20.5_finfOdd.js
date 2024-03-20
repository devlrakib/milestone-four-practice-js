
function getSomeOfAnArray (numbers){
    //console.log(numbers);

    for (var i = 0; i <numbers.length; i+=2){
        //console.log(numbers);
        const index = i;
        const elements = numbers[index];
        console.log(index,elements);
    }
}
const myNumbers = [12, 65, 45, 78, 32, 91, 30, 78, 48, 72];
getSomeOfAnArray (myNumbers);