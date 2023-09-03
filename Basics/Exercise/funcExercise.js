/*
1st exercise
Create a function checkType() which accept an input as parameter

The input will be a number

First we need to check if the "typeOf" the parameter is a number

If is a number return the number

This number will be used in another function which follows the checkType()

This function is called checkPariDispari()

Accept a parameter which will be the the number returned from the previous function

check if the number is Pari o Dispari

console.log the result of the function
*/



/*
2nd exercise

Create a function that accept a string a input parameter which return an anonymous function which also accept a string as input parameter

At the end we need to be able to display in the console "Hello World";
function a(x) {
    return function(y) {
        console.log(x + y)
    }
}

let z = a("Hello ");
z("World");
 */



// cosa viene loggato prima

// const greetIta = () => {
// 	console.log("Ciao");
// }




// const toUpper = (string) => string.toUpperCase();
// console.log(toUpper("ciao"));


// const greetIta = () => "Ciao";
// let x = greetIta();

// let a = "Andrea " + x;
// console.log(a);


// const greetEng = () => {
//     console.log("Hi");
// }

// greetEng();
hoist();

console.log(a);

function hoist() {
    a = 20;
    var b = 100;
}


/* 
Accessible as a global variable outside hoist() function
Output: 20
*/

//console.log(b);
/*
Since it was declared, it is confined to the hoist() function scope.
We can't print it out outside the confines of the hoist() function.
Output: ReferenceError: b is not defined
*/