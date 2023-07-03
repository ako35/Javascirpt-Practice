// bir dizideki pozitif ve cift sayilarin toplamini ve adedini bulun

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10];

let sum = 0;
let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0 && numbers[i] > 0) {
//         sum += numbers[i];
//         count++;
//     }
// }

// foreach
for (let i of numbers) {
    if (i % 2 === 0 && i > 0) {
        sum += i;
        count++;
    }
}

console.log(sum);
console.log(count);

// ulke ve baskentleri eslestir

const ulkeler = ['Turkiye', 'Almanya', 'Fransa', 'İngiltere'];

const baskentler = ['Ankara', 'Berlin', 'Paris', 'Londra'];

let newUlkeler = [];

for(let i = 0; i < ulkeler.length; i++) {
    newUlkeler.push(ulkeler[i] + ' ' + baskentler[i]);
}

console.log(newUlkeler);

const ulkeler2 = ['Turkiye', 'Almanya', 'Fransa', 'Ingiltere', 'Hollanda', 'Portekiz'];

const newUlkeler2 = [];
for(let i = 0; i < ulkeler2.length; i++) {
    ulkeler2[i] = ulkeler2[i].substring(0,3).toUpperCase();
    newUlkeler2.push(ulkeler2[i]);
}

console.log(newUlkeler2.sort());
console.log(newUlkeler2.sort((a,b) => a.localeCompare(b)));

let arr = [-5, 6, 3, -5, -1, 0, 4, 2];

let newArr = [];
for(let item of arr) {
    newArr.push(Math.abs(item * 2));
}

console.log(newArr);

newArr.sort((a,b) => b - a); // azalan sekilde siralar

console.log(newArr);
