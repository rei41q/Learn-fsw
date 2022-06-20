// console.log("Hai");

// =================== CORE MODULE ================
// const fs = require("fs");

// const readingFile = fs.readFileSync("./README.txt", "utf-8");

// console.log(readingFile);

// const operatingSystem = require("os");

// const readingLocation = operatingSystem.homedir();

// console.log(readingLocation);

// =================== END CORE MODULE ================

// =================== LOCAL MODULE ================

// const calculator = require("./utils/calculator");
// const { addition, substract } = require("./utils/calculator");

// const tambahkan = calculator.addition(2, 3);
// const kurangkan = calculator.substract(3, 2);

// const tambahkan = addition(2, 3);
// const kurangkan = substract(3, 2);

// console.log(`tambahkan 2 dan 3 = ${tambahkan}`);
// console.log(`kurangkan 3 dan 2 = ${kurangkan}`);
// console.log(`kalikan 3 dan 2 = ${kalikan}`);

// =================== END LOCAL MODULE ================


// =================== 3rd PARTY MODULE ================

const math = require('mathjs');

const hitung = math.add(2, 3);

console.log(hitung);