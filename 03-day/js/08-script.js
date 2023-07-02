const hesapla = () => {
    let yas= document.querySelector('#yas').value;
    let fiyat= document.querySelector('#fiyat').value;

    let indirimliFiyat = yas>=65 ? fiyat*0.7 : fiyat*0.9;

    document.querySelector('#message').innerHTML = `Indirimli Fiyat: ${indirimliFiyat}`;

    // short circuit yontemi ile yaparsak
    // let indirimliFiyat=0;
    // yas>=65 && (indirimliFiyat = fiyat*0.7);
    // yas<65 && (indirimliFiyat = fiyat*0.9);
};