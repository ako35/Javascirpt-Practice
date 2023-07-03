const data = [
    {
        ad: "Serdar Konyalı",
        yas: 35,
        img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "The Boos",
    },
    {
        ad: "Ceren Yurt",
        yas: 29,
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "Product Owner",
    },
    {
        ad: "Cenk Aslan",
        yas: 31,
        img: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "Automation Engineer",
    },
    {
        ad: "Cankan Sarı",
        yas: 25,
        img: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "Intern",
    },
    {
        ad: "Suzan Yapıcı",
        yas: 27,
        img: "https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "Web Developer",
    },
    {
        ad: "Ayberk Gök",
        yas: 32,
        img: "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "Web Designer",
    }
];

const isimElement = document.getElementById("baslik");
const meslekElement = document.getElementById("meslek");
const yasElement = document.getElementById("yas");
const imgElement = document.getElementById("resim");

const geriElement = document.getElementById("geri");
const ileriElement = document.getElementById("ileri");

const kisiGetir = (index) => {
    isimElement.innerHTML = data[index].ad;
    meslekElement.innerHTML = data[index].meslek;
    yasElement.innerHTML = data[index].yas;
    imgElement.src = data[index].img;
}

kisiGetir(0);
let card = document.getElementById("alt");
card.style.display = 'none';

let indexNow = 0;

geriElement.addEventListener("click", () => {
    indexNow--;
    if(indexNow < 0){
        indexNow = data.length - 1;
    }
    kisiGetir(indexNow);
})

ileriElement.addEventListener("click", () => {
    indexNow++;
    if(indexNow > data.length - 1){
        indexNow = 0;
    }
    kisiGetir(indexNow);
})

let buton = document.querySelector("#btn i");
buton.addEventListener("click", () => {
    if(card.style.display === 'none'){
        card.style.display = 'block';
        buton.classList.remove('fa-play')
        buton.classList.add('fa-pause')
    }
    else{
        card.style.display = 'none';
        buton.classList.remove('fa-pause')
        buton.classList.add('fa-play')
    }
    
})