import { listem } from "./data-25.js";

const yemekIcerikElement = document.getElementById("yemekicerik");
const butonlarElement = document.getElementById('butonlar')

window.addEventListener("DOMContentLoaded", () => {
  itemYerlestir(listem);
  butonlarFiltrele();
});

const itemYerlestir = (listeler) => {
  let icerikler = listeler.map((item) => {
    return `
        <div class="cerceve">
            <img src=${item.img} class='resim' alt=${item.title}>
            <h3>${item.title}</h3>
            <h3>${item.price}</h3>
            <p>${item.desc}</p>
        </div>
        `;
  });

  icerikler = icerikler.join("");

  yemekIcerikElement.innerHTML = icerikler;
};

const butonlarFiltrele = () => {
  let categories = [];
  categories.push('all');
  listem.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  })

  const butonlar = categories.map((category) => {
    return `<button id=${category}>${category}</button>`;
  })
  butonlarElement.innerHTML = butonlar.join("");

  const filtrelemeBtns = document.querySelectorAll('#butonlar button');

  filtrelemeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.target.id;
      const filtre = listem.filter((item) => item.category === category);
      if (category === 'all') {
        itemYerlestir(listem);
      } else {
        itemYerlestir(filtre);
      }
    })
  })
};
