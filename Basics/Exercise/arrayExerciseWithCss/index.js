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

let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let divContainer = document.getElementById("contentDiv");
    numbers.forEach(item => {
        let elementList = document.createElement('li');
        let filtered = checkPariDispari(item);
        //filtered == 'è Pari' ? elementList.classList.add('pari') : elementList.classList.add('dispari');
        elementList.textContent = filtered;
        divContainer.appendChild(elementList);
    })
})