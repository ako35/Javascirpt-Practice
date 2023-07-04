const deger = document.querySelector('#deger');
let select = document.getElementById("select");
const hesapla = document.querySelector('#hesapla');
const sonuc = document.querySelector('#sonuc');



hesapla.addEventListener('click', () => {
    
    let selectedOption = select.options[select.selectedIndex];

    console.log(selectedOption.value);
    if(selectedOption.value == 'celsius'){
        sonuc.innerHTML = deger.value +' °C = '+celsiusToFahrenheit(Number(deger.value))+' °F';
    }
    else{
        sonuc.innerHTML = deger.value +' °F = '+fahrenheitToCelsius(Number(deger.value))+' °C';
    }
})

// Celsius'i Fahrenheit'a dönüştürme
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  // Fahrenheit'ı Celsius'a dönüştürme
  function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }
  