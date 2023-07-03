const menumuzElement = document.querySelector(".menumuz");
const yemeklerimizElement = document.querySelectorAll(".yemeklerimiz");

menumuzElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("urun")) {
    menumuzElement.querySelector(".text-danger").classList.remove("text-danger");

    e.target.classList.add("text-danger");

    const listelenen = e.target.getAttribute('data-menulerim');

    yemeklerimizElement.forEach((yemek) => {
        if(listelenen == 'hepsi' || yemek.classList.contains(listelenen)){
            yemek.classList.remove('d-none');
        }
        else{
            yemek.classList.add('d-none');
        }
    })
  }
});
