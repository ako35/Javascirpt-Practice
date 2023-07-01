// dikdortgenin alanini hesaplayan javascript kodu
// const width = prompt('Lutfen bir sayi giriniz');
// const height = prompt('Lutfen bir sayi giriniz');

// const calculateRectangleArea = (width, height) => {
//     const area = width * height;
//     return area;
// }

// console.log(`Dikdortgenin alanı : ${calculateRectangleArea(width, height)}`);

let piSayisi=3.14;
console.log(typeof piSayisi);

const str='Satranc oynamayi severim.';
console.log(typeof str);

let a = null;
console.log(typeof a);
console.log(Boolean(a));

let b=undefined;
console.log(typeof b);
console.log(Boolean(b));

let name1='ali';
let name2='oya';
let name3='can';
let name4=null;
let name5='';
let name6=undefined;

console.log(name1 && name2 && name3); // can
console.log(name1 && name2 && name4 && name3); // null
console.log(name4 || name5 || name2 || name6); // oya
console.log(name4 || name5 || false || name6); // undefined

let x = 40;

let y = "30";

console.log(x == '40'); // true

console.log(y === 30); // false

console.log(y !== 30); // true

console.log(x > y+10); // false

// verilen sayinin birler onlar ve yuzler basamagindaki sayiyi bulup toplamini yazan javascript kodu

// const sayi = prompt('Lutfen bir sayi giriniz');
// const basamaklar = sayi.toString().split('').map(Number);
// const toplam = basamaklar.reduce((a, b) => a + b);
// console.log(toplam);

const sayi = 123;

let birlerBasamagi = Number(sayi) % 10;
let onlarBasamagi = (Number(sayi) % 100 / 10).toFixed(0);
let yuzlerBasamagi = (Number(sayi)/100).toFixed(0);

console.log(birlerBasamagi);
console.log(onlarBasamagi);
console.log(yuzlerBasamagi);

console.log(Number(birlerBasamagi) + Number(onlarBasamagi) + Number(yuzlerBasamagi));

let aa=5;
let bb=--aa;
let cc=bb++;

console.log(aa);
console.log(bb);
console.log(cc);


