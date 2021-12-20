


function sumOfTwoNumbers(num, num1) {
    let sum = num + num1;
    return sum;
}

let sumOfTwoNumbersResult = sumOfTwoNumbers(8, 2);
console.log(sumOfTwoNumbersResult);


function subtractTwoNumbers(num, num1) {
    let subtract = num - num1;
    return subtract;
}

let subtractTwoNumbersResult = subtractTwoNumbers(6, 3);
console.log(subtractTwoNumbersResult);


function multiplyTwoNumbers(num, num1) {
    let multiply = num * num1;
    return multiply;
}

let multiplyTwoNumbersResult = multiplyTwoNumbers(8, 4);
console.log(multiplyTwoNumbersResult);


function divideTwoNumbers(num, num1) {
    let divide = (num / num1);
    if (num1 !=0) {
        return divide;
    } else {
        return "numberInputisNotValid";
    }
}

let divideTwoNumbersResult = divideTwoNumbers(20, 5);
console.log(divideTwoNumbersResult);

let divideTwoNumbersResult1 = divideTwoNumbers(10, 0);
console.log(divideTwoNumbersResult1);