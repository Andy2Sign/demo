// const main = () => {
//     let x = document.getElementById('myValue').value;
//     document.getElementById('myText').innerHTML = x.toUpperCase();

// }

// let btn = document.getElementById('myBtn');
// btn.addEventListener('click', function() {
//     let x = document.getElementById("myValue").value;
//     console.log(x);
//     let num = parseInt(x);
//     console.log(num);
//     document.getElementById('myText2').innerHTML = num;
// })

const check = () => {
  let str = document.getElementById("myValue").value;
  console.log(typeof str);
  console.log(str.toUpperCase());
  str == str.toUpperCase() ? alert("La stringa è upper") : alert("not upper");
};

let btn = document.getElementById("myBtn");
btn.addEventListener("click", check);

let z = document.getElementById("myBtn");
z.addEventListener("click", () => {
  z.classList.add("color");
});
