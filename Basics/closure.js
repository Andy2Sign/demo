/*A closure is an inner function which has access to the variables of the outer function’s scope chain.
The closure has access to variables in 3 scopes:
	1. Variables in its own scope
	2. Variables in the enclosing function scope
    3. Global Variables */


    let a = 'Hi Alex';

    function greet(){
        console.log(a);

        let b = 'Hi Andrea';
        console.log(b + ' ' + a);

        //console.log(c);

        function bye(){
            
            let c = 'How is it going?';
            console.log(c);

            console.log(a + ' ' + b + ' ' + c);

            
        }
         
        bye()
        //console.log(a + ' ' + b + ' ' + c);


    }

    greet();