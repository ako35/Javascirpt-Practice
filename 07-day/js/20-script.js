const numLabelElement = document.querySelector("#numLabel");
const numberElement = document.querySelector("#sayi");
const btnKaydetElement = document.querySelector("#btnKaydet");
const btnGenerateElement = document.querySelector("#btnGenerate");
const displayNumbersElement = document.querySelector("#displayNumbers");
const displayRandomNumbersElement = document.querySelector(
  "#displayRandomNumbers"
);
const sonucElement = document.querySelector("#sonuc");

let userArray = [];
let randomArray = [];

btnGenerateElement.addEventListener("click", () => {
  userArray = [];
  randomArray = [];
  for (let i = 0; i < 10; i++) {
    userArray.push(getNumber());
    randomArray.push(getNumber());
  }
  displayNumbersElement.innerHTML = userArray;
});

btnKaydetElement.addEventListener("click", () => {
  if (numberElement.value > 0 && numberElement.value < 100) {
    if (userArray.includes(numberElement.value)) {
      alert("Bu sayı daha önce kullanılmış");
    } else {
      userArray.push(numberElement.value);
      numberElement.value = "";
      userArray.sort((a, b) => a - b);
      displayNumbersElement.innerHTML = userArray;
      if(userArray.length<6){
        numLabelElement.innerHTML = (userArray.length+1) + ". sayiyi giriniz";
      }
      else{
          btnKaydetElement.classList.add("d-none");
          btnGenerateElement.classList.remove("d-none");
          btnGenerateElement.classList.add("inline-block");
      }
    }
  } else {
    alert("Lütfen 1 ile 100 arasında bir sayı giriniz");
  }
});
