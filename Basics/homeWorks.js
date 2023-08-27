/*Scrivi una funzione che dato l’anno corrente e un anno di nascita determini:

1. l’età della persona
2. quanti anni sono necessari per raggiungere i 100

Esempio:
Input: anno corrente = 2021, anno di nascita = 1996
Output: età = 25, anni mancanti = 75

la funzione deve prendere i dati come input quando invocata*/

/*let age = (a, b) => ("età ") + (a - b) + " - ";

let age2 = (a, b) => ("anni mancanti") + "" + (100 - (a - b));

console.log(age(2023, 1994), age2(2023, 1994));

/*
Combina due funzioni che rispettivamente gestiscano la seguente situazione:

Per una festa inviterò “x” persone.

Se le persone sono più di 20, la festa non può avere luogo nel mio appartamento perché troppo piccolo. Quindi la “condizione” farà il suo check e mi dirà se il mio appartamento va bene oppure no.

Se l’appartamento è grande abbastanza devo comprare delle birre per gli invitati.

Ogni invitato beve “y” birre.

Ogni birra costa 1.50 chf.

Calcola quanti soldi devo spendere per comprare “y” birre.

Calcola quante birre avrò comprato a seconda degli invitati che ho alla festa.
*/


let party = (x) => {
    if (x > 15) {
        console.log("No party");
    } else {
        console.log("Numero di invitati:  " + x);

        return x;
    }
};

let persons = party(12);

let beerNeeded = (y) => {
    let beerPrice = 1.5;

    let totalBeers = y * persons;

    console.log("Birre totali: " + totalBeers);

    let moneyNeeded = beerPrice * totalBeers;

    console.log(
        "il numero di birre di cui ho bisogno per  " +
        persons +
        " invitati " +
        " è: " +
        totalBeers + "." +
        " I soldi di cui ho bisogno se ogni persona beve : " +
        y +
        " birre: " +
        moneyNeeded +
        "  chf "
    );

    //console.log(moneyNeeded);
};

beerNeeded(5);