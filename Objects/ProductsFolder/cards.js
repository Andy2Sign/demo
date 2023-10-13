// import { data } from './module.js';


const data = [{
        id: 1,
        firstName: 'Andrea',
        secondName: 'Bisegna',
        city: 'Lugano'
    },
    {
        id: 2,
        firstName: 'Alex',
        secondName: 'Cela Camba',
        city: 'Basel'
    }
];

let btn = document.getElementById('btn');

btn.addEventListener("click", function() {
    console.log("Hello world")
    let contentDiv = document.getElementById("content");


    data.forEach(dataItem => {
        // console.log(`<li>${dataItem.firstName}</li>`)
        let element = document.createElement('li');
        element.textContent = `Candidato ${dataItem.id}: ${dataItem.firstName + " " + dataItem.secondName}`; //newPara(dataItem.firstName);
        contentDiv.appendChild(element);
    });

});

//const newPara = (name) => { return `Name: ${name}` };


// const getData = (item) => {
//     item.map((el) => {
//         console.log(`<li>${el.firstName}<li/>`, `<li>${el.lastName}<li/>`);
//     })
// }

// getData(data);