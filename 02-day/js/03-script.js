const renk1=document.querySelector('.red');
const renk2=document.querySelector('.white');
const renk3=document.querySelector('.blue');
const renk4=document.querySelector('.black');
const renk5=document.querySelector('.green');

const yanlisDurum=document.querySelector('#yanlis');

renk1.innerText='kirmizi'.toUpperCase();
renk2.innerText='beyaz'.toUpperCase();
renk3.innerText='mavi'.toUpperCase();
renk4.innerText='siyah'.toUpperCase();
renk5.innerText='yesil'.toUpperCase();

let yanlisHal=`
    <div class="row">
        <div class="red">Siyah</div>
        <div class="white">Kirmizi</div>
        <div class="blue">Yesil</div>
        <div class="black">Mavi</div>
        <div class="green">Beyaz</div>
    </div>`

yanlisDurum.innerHTML=`<h1>Yanlis Renkler</h1>
                        ${yanlisHal}`;
