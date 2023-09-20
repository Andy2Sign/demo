alert("Inserisci studenti nella lista");

const arrayStudents = () => {
    const sufficienza = 6;
    // qui prendo le stringhe dall?input
    let names = document.getElementById("myValue").value;
    let voto = document.getElementById("myVoto").value;

    //metodo per creare nuovo array chiamato students
    let students = new Array();
    let votes = new Array();
    let myObj = {};
    //con il metodo split divido le stringhe basandomi sulla virgola
    // e oer ogni stringa creo un indice dell'array
    students = names.split(",");
    votes = voto.split(",");
    // console.log(students);
    // console.log(votes);

    let finalArray = [];

    students.forEach((el, index) => {
        myObj[el] = votes[index];

    });

    for (const [key, value] of Object.entries(myObj)) {
        finalArray.push({ nomeStudente: key, votoStudente: value });
    }





    // let listSplt = {};
    // var z = 0;

    // for (key in myObj) {
    //     myObj[key].split(',').map(function(item) {
    //         listSplt[z] += item;
    //         z++;
    //     });
    // };

    // console.log(myObj);
    console.log(finalArray);
    // console.log(listSplt);

    // let studentsMapped = students.map((el) => {
    //     return (myObj.nomeStudente = el);
    // });

    //stampo nella console per controllare il risultato
};

// let students = [];
// let btn = document.getElementById("myBtn");

// btn.addEventListener("click", function() {
//     let names = document.getElementById("myValue").value;
//     console.log(names);
//     students.push(names);
//     console.log(students);
//     document.getElementById("myValue").value = " ";
// });