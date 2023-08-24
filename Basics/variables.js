//Difference Between Var, Let , Const
//const means that the identifier can’t be reassigned. If we need to reassign a variable we can’t use the const keyword but the let keyword instead.


/*const x = "Andrea";

const x = 2;

console.log(x); // this throws an error*/



/*A variable declared at the top of a program or outside of a function is considered a global scope variable 

The value of a global variable can be changed inside a function. For example,*/

// program to show the change in global variable
let a = "hello";

function greet() {
    a = 3;
}

// before the function call
console.log(a);

//after the function call
greet();
console.log(a); // 3



/* In JavaScript, a variable can also be used without declaring it. If a variable is used without declaring it, 
that variable automatically becomes a global variable.*/

function greet() {
    a = "hello"
}

greet();

console.log(a); // hello


/*LOCAL SCOPE - A variable can also have a local scope, i.e it can only be accessed within a function. */

// program showing local scope of a variable
let b = "hello";

function greet() {
    let c = "World"
    console.log(b + c);
}

greet();
console.log(a + c); // error



//Other Example

// program showing block-scoped concept
// global variable
let z = 'Hello';

function greet() {

    // local variable
    let b = 'World';

    console.log(z + ' ' + b);

    if (b == 'World') {

        // block-scoped variable
        let c = 'hello';

        console.log(z + ' ' + b + ' ' + c);
    }

    // variable c cannot be accessed here
    console.log(z + ' ' + b + ' ' + c);
}

greet();

// let variable

//Let is a variable block scope. A variable declared in a block with let is only available for use within that block.

/*let greeting = 'Say hi';

let times = 4;

if(times > 3){
  let hello = 'Say Hello Instead'; // hello is not defined
  //console.log(hello);
}

//console.log(hello);
console.log(greeting);*/


/*var is a global scope and local scope variable. 
The problem with var is that you can not fully control the usage of the variable as in a large code accidentally can happen that you redefine a variable . This will likely cause bugs*/



let greeting = 'Say hi';

let times = 4;

if(times > 3){
  var hello = 'Say Hello Instead'; // hello is not defined
  //console.log(hello);
}

//var hello = 'Antonio';

//console.log(hello);
//console.log(greeting);