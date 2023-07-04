import { listem } from "./assets/js/data-25.js";

yemekIcerikElement = document.getElementById("yemekicerik");

window.addEventListener("DOMContentLoaded", () => {
  itemYerlestir(listem);
  butonlarFiltrele();
});

const itemYerlestir = (listeler) => {
  let icerikler = listeler.map((item) => {
    return `
        <div class="card">
            <div class="card-image">
                <img src="${item.img}" alt="">
            </div>
            <div class="card-info">
                <h3>${item.title}</h3>
                <h3>${item.price}</h3>
                <p>${item.desc}</p>
            </div>
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
    if (categories.includes(item.category)) {
      categories.push(item.category);
    }
  })
};
