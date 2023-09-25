let days = [
    "lunedi",
    "martedi",
    "mercoledi",
    "giovedi",
    "venerdi",
    "sabato",
    "domenica",
];

function checkBool(x) {
    if (x > 0 && x <= 7) {
        return x;
    } else {
        console.log("non posso trovare il giorno");
    }
}


const dayNumber = () => {
    let z = document.getElementById("myValue").value;
    y = parseInt(z);

    switch (checkBool(y)) {
        case 1:
            console.log(days[0]);
            break;
        case 2:
            console.log(days[1]);
            break;
        case 3:
            console.log(days[2]);
            break;
        case 4:
            console.log(days[3]);
            break;
        case 4:
            console.log(days[4]);
            break;
        case 5:
            console.log(days[5]);
            break;
        case 6:
            console.log(days[6]);
            break;
        default:
            console.log("NOK");
    }
};