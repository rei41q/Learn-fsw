// const pargraf1 = document.getElementById("p1");
// pargraf1.innerText = "hei there";
// pargraf1.style.backgroundColor = 'orange';

// const pargraf2 = document.getElementsByName("p2");
// pargraf2[0].style.backgroundColor = 'blue';
// pargraf2[1].style.backgroundColor = 'yellow';

// let button1 = document.getElementById("button1");
// let paragraf = document.getElementById("p1");
// let color;

// button1.onclick = function () {
//   alert("button 1 clicked");
//   if (color === "yellow") {
//     paragraf.style.backgroundColor = "white";
//     color = 'white';
//   } else {
//     paragraf.style.backgroundColor = "yellow";
//     color = 'yellow';
//   }
//   //   paragraf.style.backgroundColor = "yellow";
// };

// let button2 = document.getElementById("button2");
// button2.addEventListener("click", () => {
//   alert("button 2 clicked");
//   paragraf.style.backgroundColor = "red";
// });

// const button = document.getElementById("add");
// const paragraf1 = document.getElementById("p1");
// // let newElement = document.createElement("div");
// // newElement.innerText = "New Element";

// button.onclick = function () {
//   const parent = document.getElementById("wrapper");

//   let clonedElement = paragraf1.cloneNode(true);
//   clonedElement.id = "p2";
//   parent.append(clonedElement);
//   //   let clonedElement = parent.append(newElement);
// };

// const parent = document.getElementById("wrapper");

// const daftarBuah = ["semangka", "mangga", "anggur", "leci", "durian"];

// // daftarBuah.forEach((buah) => {
// //   const parent = document.getElementById("wrapper");
// //   let newElement = document.createElement('div')
// //   newElement.innerText = buah;
// //   newElement.style.padding = "5px";
// //   newElement.style.border = "1px solid black";
// //   parent.append(newElement);
// // });

// for (let x = 0; x < daftarBuah.length; x++) {
//   const parent = document.getElementById("wrapper");
//   let newElement = document.createElement("div");
//   newElement.innerText = daftarBuah[x];
//   newElement.style.padding = "5px";
//   newElement.style.border = "1px solid black";
//   parent.append(newElement);
// }

// const hitungDiskon = (diskon, harga) => {
//   return (diskon / 100) * harga;
// };

const hitungDiskon = (diskon, harga) => (diskon / 100) * harga;
