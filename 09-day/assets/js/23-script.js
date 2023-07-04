const notlar = [
    "Yataktan kalk",
    "Elini yüzünü yıka",
    "Kalvaltı hazırla",
    "Ailecek kahvaltı yap"
];

const eklenecekYazi = document.querySelector("#yeni");
const listeBtn = document.querySelector("#ekle");
const silBtn = document.querySelector("#sil");
const metinElement = document.querySelector("#metin");
const listelerim = document.querySelector("#liste");

listeBtn.addEventListener("click", () => {
    if(!eklenecekYazi.value){
        eklenecekYazi.focus();
        return;
    }

    notlar.push(eklenecekYazi.value);
    listele();
})

const listele = () => {
    listelerim.innerHTML = "";
    metinElement.innerHTML = "";

    notlar.forEach((not) => {
        const li = document.createElement("li");
        li.innerText = not;
        listelerim.appendChild(li);
    })

    metinElement.innerText = notlar.join(", ");
    eklenecekYazi.value = "";
    eklenecekYazi.focus();
}

silBtn.addEventListener("click", () => {
    if(notlar.length === 0){
        alert("Liste boş");
        return;
    }

    notlar.pop();
    listele();
})

eklenecekYazi.addEventListener("keyup", (e) => {
    if(e.key==='Enter'){
        listeBtn.click();
    }
})

listele();

