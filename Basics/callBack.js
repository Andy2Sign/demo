//this is a function which accept a string as parameter that will be returned toUpperCase 

// function toUpper(x) {
//     return x.toUpperCase();
// }

//this is another function which accpet two input parameters: y, formatter
//this will logs the first input passed as parameter into the second input
// it means the second inout is a function
//A function can accept as parameter another function previously declared
//this is a callBack
//a callback is a function which has the possibility to be passed as 
//parameter and manipulate others parameters passed with itself

// const giveName = (y, formatter) => {
//     console.log(formatter(y));
// }

//here we pass the parameters

// let res = giveName("andrea", toUpper);

// console.log(res)



// const callback = () => {
//     console.log("Coming from callback");
// }

// const higherOrder = (func) => {
//     console.log("About to call callback");

//     func() //Callback function is invoked

//     console.log("Callback has been invoked")
// }

// higherOrder(callback);

// result is:

// "About to call callback"
// "Coming from callback"
// "Callback has been invoked"


//We have to build a function which return a random number already parsed
// we need to print this number in the console only if it is Odd trhough an higerOrder function


const generate = () => {
    return Math.ceil(Math.random() * 10);
}
let number = generate();
console.log(number);

//here below the callback we'll use as parameter

const checkNumber = (num) => num % 2 != 0 ? "the number is: " + num : num + " is not Odd";

//this below is the HigherOrder function which accept the callback as parameter

const printRes = (value, check) => {

    console.log(check(value));
}

console.log(printRes(number, checkNumber));