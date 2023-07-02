let sayi1Element = document.getElementById('sayi1');
let sayi2Element = document.getElementById('sayi2');
let sonuc = document.getElementById('sonuc');

document.getElementById('hesapla').addEventListener('click', () => {
    let sayi1=Number(sayi1Element.value);
    let sayi2=Number(sayi2Element.value);

    let toplam=0;
    let sayac=0;

    if(sayi1>sayi2){
        let temp=sayi1;
        sayi1=sayi2;
        sayi2=temp;
    }

    for(let i=sayi1;i<=sayi2;i++){
        if(i%4==0 && i%8!=0){
            toplam+=i;
            sayac++;
        }
    }

    sonuc.innerHTML = `Toplam: ${toplam}  Sayac: ${sayac}`;

});