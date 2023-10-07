/*The Object type represents one of JavaScript’s data type. It si used to store various keyed collections and more complex entities. 
Objects can be created using the Object();

- The JavaScript this keyword refers to the object it belongs to
*/

let Person = {
    id: 1,
    namePerson: "alex",
    surnamePerson: "celaCamba",
    getName: function() {
        console.log(`The name of the person is: ${this.namePerson} and the surname is: ${this.surnamePerson}`);
    },
    address: "Via america"
}

console.log(Person.address);
Person.getName();


let myObject = {
    random: "bar",
    func: function() {
        let self = this;
        console.log("outer func: this.random = " + this.random); // here this refers to myObject
        console.log("outer func: self.random = " + self.random); // here self refers to this which refers to myObject 
        (function() {
            console.log("inner func: this.random = " + this.random); // here this doesn't refers anymore to myObject
            console.log("inner func: self.random = " + self.random); // self is still referring to this which refers to myObject
        }())
    }
};

myObject.func();