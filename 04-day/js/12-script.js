
document.getElementById('btn-on').addEventListener('click', () => {
    document.getElementById('lamp').src='../../04-day/img/lamba_on.gif';
})

document.getElementById('btn-off').addEventListener('click', () => {
    document.getElementById('lamp').src='../../04-day/img/lamba_off.gif';
})

document.getElementById('lamp').addEventListener('mouseover', () => {
    document.getElementById('lamp').src='../../04-day/img/lamba_on.gif';
})

document.getElementById('lamp').addEventListener('mouseleave', () => {
    document.getElementById('lamp').src='../../04-day/img/lamba_off.gif';
})