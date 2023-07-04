const gun = document.querySelector('#gun');
const saat = document.querySelector('#saat');
const dakika = document.querySelector('#dakika');
const saniye = document.querySelector('#saniye');

const zamaniHesapla = () => {
    
    const date = new Date('2023-01-01');

    const dateNow = new Date();

    const difference = dateNow.getTime() - date.getTime();

    gun.innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24));
    saat.innerHTML = Math.floor(difference / (1000 * 60 * 60) % 24);
    dakika.innerHTML = Math.floor(difference / (1000 * 60) % 60);
    saniye.innerHTML = Math.floor(difference / 1000 % 60);

}

setInterval(zamaniHesapla, 1000);