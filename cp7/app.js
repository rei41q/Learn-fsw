// const fs = require("fs");

// const appRunning = () => {
//   fs.readFile("./file.txt", "utf-8", (err, data) => {
//     console.log("bacaan pertama filenya berasar, butuh waktu =>", data);
//   });
//   console.log("Panggilan pertama");
//   console.log("Panggilan kedua");
//   console.log("Panggilan ketiga");
//   fs.readFile("./file.txt", "utf-8", (err, data) => {
//     console.log("bacaan kedua, cepat =>", data);
//   });
// };

// appRunning();

const greeting = (name) => {
  return new Promise((resolve, reject) => {
    if (name === "Johan") {
      resolve("Hi Johan");
    } else {
      reject("Bukan Johan");
    }
  });
};

const getLocation = (location) => {
  return new Promise((resolve, reject) => {
    if (location === "USA") {
      resolve("FROM USA");
    } else {
      reject("NOT FROM USA");
    }
  });
};

// const theGreeting = greeting("Johan");
// console.log(theGreeting);
// greeting("Johan")
//   .then((response) => {
//     // console.log("inside then => ", response);
//     if (response === "Hi Johan") {
//       getLocation("US")
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err));
//     }
//   })
//   .catch((error) => console.log("inside catch => ", error));

const mainApp = async () => {
  try {
    const theGreeting = greeting("Johans");
    console.log(theGreeting);
    const theLocation = await getLocation("USA")
    console.log(theLocation);
  } catch (err) {
    console.log("ada error => ", err);
  } 
};

mainApp();


