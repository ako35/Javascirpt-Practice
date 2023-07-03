let screenElement = document.querySelector('#screen-text');
let pwdLengthElement = document.querySelector('#pwd-length');
let upperCaseElement = document.querySelector('#upperCase');
let lowerCaseElement = document.querySelector('#lowerCase');
let numberElement = document.querySelector('#number');
let symbolElement = document.querySelector('#symbol');
let generateElement = document.querySelector('#generate');

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^&*()';

const getUpperCase = () => {
    return upperCase[Math.floor(Math.random() * upperCase.length)];
}

const getLowerCase = () => {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

const getNumber = () => {
    return number[Math.floor(Math.random() * number.length)];
}

const getSymbol = () => {
    return symbol[Math.floor(Math.random() * symbol.length)];
}

const generatePassword = () => {
    let password = '';

    let i = 0;
    while (true) {
        if (Number(pwdLengthElement.value) === i) {
            break;
        }
        if (upperCaseElement.checked && i < Number(pwdLengthElement.value)) {
            password += getUpperCase();
            i++;
        }
    
        if (lowerCaseElement.checked && i < Number(pwdLengthElement.value)) {
            password += getLowerCase();
            i++;
        }
    
        if (numberElement.checked && i < Number(pwdLengthElement.value)) {
            password += getNumber();
            i++;
        }
    
        if (symbolElement.checked && i < Number(pwdLengthElement.value)) {
            password += getSymbol();
            i++;
        }
    }

    return password;
}

generateElement.addEventListener('click', () => {
    screenElement.textContent = generatePassword();
})