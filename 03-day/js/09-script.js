let rb_erkek = document.querySelector('#erkek');
let rb_kadin = document.querySelector('#kadin');
let mesaj = document.querySelector('#sonuc');
let yas = document.querySelector('#yas');

mesaj.style.padding = '20px';

const durum = () => {

    
    
    if(yas.value){
        if(yas.value>=20 && rb_erkek.checked){
            mesaj.innerHTML = `<strong>Askere gidebilirsiniz</strong>`
            mesaj.style.backgroundColor = 'green';
            mesaj.style.display = 'block';
        } else {
            mesaj.innerHTML = `<strong>Askere gidemezsiniz</strong>`
            mesaj.style.backgroundColor = 'red';
            mesaj.style.display = 'block';
        }
    } else {
        mesaj.innerHTML = `<strong>Yaşınızı giriniz</strong>`
        mesaj.style.backgroundColor = 'yellow';
        mesaj.style.display = 'block';
    }
}

const sil = () => {
    yas.toString();
    yas.value = '';
    yas.focus();
    mesaj.style.display = 'none';
}