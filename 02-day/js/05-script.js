
let msg = document.querySelector('#msg');

const hesapla = () => {
    let vize = document.querySelector('#vize').value;
    let final = document.querySelector('#final').value;

    let sonuc =Number(vize*0.4)  + Number(final*0.6);
    if(sonuc>85){
        msg.innerHTML = `AA`;
    } else if(sonuc>75){
        msg.innerHTML = `BB`;
    } else if(sonuc>65){
        msg.innerHTML = `CC`;
    } else if(sonuc>55){
        msg.innerHTML = `DD`;
    } else {
        msg.innerHTML = `FF`;
    }

    msg.classList.add('mesaj');
};

const sil = () => {
    msg.innerHTML = '';
    msg.classList.remove('mesaj');
}