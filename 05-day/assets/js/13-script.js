let colorElement = document.querySelector('#color');

const colorArray = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
]

document.getElementById('btn').addEventListener('click', () => {
    colorElement.textContent = colorArray[Math.floor(Math.random() * colorArray.length)];
    document.querySelector('body').style.backgroundColor = colorElement.textContent;
});