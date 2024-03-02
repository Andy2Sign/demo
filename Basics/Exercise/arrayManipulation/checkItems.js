
//--- We nned to create an array with random numbers

let numbersList = [];

const generate = () => {
    for (let i = 0; i < 10; i++) {
        numbersList.push(Math.ceil(Math.random() * 100))
    }
    return numbersList;
}

let list = generate();

console.log(list);

const operation = (numbers) => {
    let sortedArray = [];
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let temp = 0;
            if (numbers[i] > numbers[j]){
                console.log('questa è i ' + numbers[i]);
                console.log('questa è j '+ numbers[j]);
                temp = numbers[i];
                console.log('questo è temp ' + temp);
                numbers[i] = numbers[j];
                numbers[j] = temp
            }            
        }
        sortedArray.push(numbers[i])
    }
    return sortedArray;

}

let orderedArray = operation(list);

console.log(orderedArray);