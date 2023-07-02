let sayi1 = document.querySelector('#sayi1');
let sayi2 = document.querySelector('#sayi2');
let mesaj = document.querySelector('#mesaj');

const hesapla = () => {
    console.log(sayi1.value);
    console.log(sayi2.value);
    
    if(sayi1.value>sayi2.value){
        let temp = sayi1.value;
        sayi1.value = sayi2.value;
        sayi2.value = temp;
    }

    let kalanlar = 0;

    while(sayi2.value>sayi1.value){
        kalanlar+=(sayi2.value%sayi1.value);
        sayi1.value++;
    }

    mesaj.innerHTML = `Kalanlar: ${kalanlar}`;
}