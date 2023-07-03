const sayac = document.querySelector('.sayac');
const giris = document.querySelector('#giris');
const resetBtn = document.querySelector('#sil');
const mesaj = document.querySelector('.msj');

giris.focus();

giris.addEventListener('input', () => {
    mesaj.innerHTML = '';
    sayac.innerHTML = giris.value.length;
})

resetBtn.addEventListener('click', () => {
    sayac.innerHTML = '0';
    giris.value = '';
    giris.focus();
    setTimeout(() => {
        mesaj.innerHTML = '<em>Devam edebilirsin</em>'
    }, 3000);
})

giris.addEventListener('keyup', (e) => {
    if(e.key==='Enter'){
        resetBtn.click();
    }    
})

setTimeout(() => {
    mesaj.innerHTML = '<em>Devam edebilirsin</em>'
}, 3000);

