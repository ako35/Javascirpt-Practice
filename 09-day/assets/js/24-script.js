const valueElement = document.getElementById("value");
const butonlarElement = document.querySelectorAll(".btn");

let count = 0;

butonlarElement.forEach((buton) => {
  buton.addEventListener("click", (e) => {
    if(e.target.innerText=='DECREASE'){
        count--;
    }
    else if(e.target.innerText=='INCREASE'){
        count++;
    }
    else{
        count=0;
    }

    if(count<0){
        valueElement.style.color='red';
    }
    else if(count>0){
        valueElement.style.color='green';
    }
    else{
        valueElement.style.color='black';
    }

    valueElement.innerText = count;
  });
});
