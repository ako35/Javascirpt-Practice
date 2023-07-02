const ustAl= () => {
    const taban = document.querySelector('#taban').value;
    const ust = document.querySelector('#ust').value;

    const sonuc = Number(taban ** ust);

    document.querySelector('.sonuc').classList.add('ekle');

    document.querySelector('.sonuc').style.display = 'inline-block';

    document.querySelector('.sonuc').innerHTML = `<b>${taban}<sup>${ust}</sup>=${sonuc}</b>`;

}