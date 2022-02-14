"use strict";

// const now = new Date('2022-02-13');

// const now = new Date(2022, 2, 13, 20+3);

// const now = new Date(0);

const now = new Date('2022-02-13');

console.log(now.setHours(15));
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getUTCHours());
// console.log(now.getHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for(let i = 0; i < 1000000; i++){
    let some = i**3;
}

let end = new Date();

console.log('Цикл отработал за ', end - start, 'ms');