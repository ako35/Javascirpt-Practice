let buton = document.querySelector(".btn");
let video = document.querySelector(".background-video");
let faElement = document.querySelector(".fa");

buton.addEventListener("click", () => {
    control();
})

const control = () => {
    if (video.paused) {
        video.play();
        faElement.classList.remove("fa-play");
        faElement.classList.add("fa-pause");
    } else {
        video.pause();
        faElement.classList.remove("fa-pause");
        faElement.classList.add("fa-play");
    }
}