import { data } from './module.js';


document.addEventListener("DOMContentLoaded", function() {

    let contentDiv = document.getElementById("content");
    //let template = document.createElement("template");

    data.forEach(dataItem => {
        let element = document.createElement('p');
        element.innerHTML = newPara(dataItem.firstName);
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