const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const checkPariDispari = (num) => {
    if (num % 2 == 0) {
        //console.log(`${num} è Pari`);
        return `${num} è Pari`;
        //document.getElementById("myId").innerHTML = `${num} è Pari`;
    } else {
        //console.log(`${num} è Dispari`)
        return `${num} è Dispari`;
        //document.getElementById("myId").innerHTML = `${num} è Dispari`;
    }
};

const display = () => {
    // let filtered = numbers.filter(checkPariDispari)
    // filtered.map((el) => {

    //     document.getElementById('myDiv').innerHTML = el;
    // });

    document.getElementById('myId').innerHTML = numbers.map((el) => {
        el + " helo";
    })


}