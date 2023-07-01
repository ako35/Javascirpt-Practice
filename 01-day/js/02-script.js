// dikdortgenin alanini hesaplayan javascript kodu
const width = prompt('Lutfen bir sayi giriniz');
const height = prompt('Lutfen bir sayi giriniz');

const calculateRectangleArea = (width, height) => {
    const area = width * height;
    return area;
}

console.log(`Dikdortgenin alanı : ${calculateRectangleArea(width, height)}`);
