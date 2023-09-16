/*
It is a Javascript Concept. It represents the concept that the Javascript compiler moves all the declarations 
of variable and functions at the top, so they can be used before declaring it.
It allows us to call functions before even writing them in our code. 
Note: JavaScript only hoists declarations, not initializations.
JavaScript allocates memory for all variables and functions defined in the program before execution.

*/
let a; // Declaration
a = 100; // Assignment
console.log(a); // Usage



let nome;
nome = "Andrea";
console.log(nome);


// function fun() {
//     console.log(y);
//     var y = 'Mukul Latiyan';
// }
// fun();

fun();

function fun() {
    console.log("Hello");
}

// Hoisting
hoist();

console.log(a);
let b;
console.log(b);

function hoist() {
    a = 20;
    b = 100;
}

console.log(a);

//Accessible as a global variable outside hoist() function
//Output: 20

/*
Since it was declared, it is confined to the hoist() function scope.
We can't print it out outside the confines of the hoist() function.
Output: ReferenceError: b is not defined
*/