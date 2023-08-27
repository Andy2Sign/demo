/*
Function currying is a technique in functional programming where a function is transformed into a sequence of functions, each taking a single argument.

This allows for partial application of a function's arguments, and can simplify function composition.

It is named after the logician Haskell Curry.

In JavaScript, the `curry` function can be used to curry a given function.
 */

// let outerFunction = function() {
//     return function() {
//         console.log("Inner function");
//     };
// };
// let innerFunction = outerFunction();
// innerFunction(); // "Inner function"

// let multiplyByTwo = (x) => (y) => console.log(y * x);
// let func = multiplyByTwo(2);
// func(10);

// console.log(func);

// now we tranform the above function to ES5 model

// let's build a currying function which transform a string toUpperCase

// Requirements: a function getString - a function toUpperCase

// build here your code:



// Referred to the 2nd exercise

let party = (x) => {
    if (x > 15) {
        console.log("No party");
    } else {
        console.log(" Numero di invitati:  " + x);

        return function(b) {
            return x - b + " Bevono alcol";
        };
    }
};

let checkNoAlc = party(12);
console.log(checkNoAlc(3));