const btn = document.getElementById("pato");
const Acertou = document.getElementById("Audio");
const Errou =document.getElementById("errouAudio");

btn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 50);
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
});

document.addEventListener("click", (e) => {
    if (!btn.contains(e.target)) {
        Errou.currentTime = 0;
        Errou.play();
    }
    else if(btn.contains(e.target)){
        Errou.pause();
        Acertou.play()
    }
});
