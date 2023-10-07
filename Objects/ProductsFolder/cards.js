import { data } from './module.js';


const getData = (item) => {
    item.map((el) => {
        console.log(`<li>${el.firstName}<li/>`, `<li>${el.lastName}<li/>`);
    })
}

getData(data);