// Contador de cliques no botão "Tocar Música"
let clickCount = 0;

// Função para iniciar a música ao clicar no botão
document.getElementById("playMusic").addEventListener("click", function() {
    let audio = document.getElementById("backgroundMusic");
    audio.play().then(() => {
        console.log("Música tocando!");
    }).catch(error => {
        console.log("Erro ao tocar música:", error);
    });

    // Easter Egg aparece após 5 cliques
    clickCount++;
    if (clickCount === 5) {
        document.getElementById("easterEgg").classList.add("show");
    }

    // Criar corações animados ao clicar no botão
    createFloatingHeart();
});

// Tentar tocar a música automaticamente ao carregar a página
window.addEventListener("load", function() {
    let audio = document.getElementById("backgroundMusic");
    audio.play().catch(error => {
        console.log("A reprodução automática foi bloqueada. Clique no botão para iniciar.");
    });
});

// Função de contagem regressiva
function countdown(targetDate, elementId) {
    let now = new Date();
    let target = new Date(targetDate);
    let diff = now - target;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById(elementId).innerText = `${days} dias desde esse momento especial 💖`;
}

countdown("2025-02-12", "countdown1");
countdown("2025-02-16", "countdown2");
countdown("2025-02-23", "countdown3");
countdown("2025-03-02", "countdown4");

// Função para criar corações animados 💖
function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    document.body.appendChild(heart);

    let x = Math.random() * window.innerWidth;
    heart.style.left = `${x}px`;
    heart.style.top = "-20px";

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Criar corações aleatórios no fundo
setInterval(createFloatingHeart, 1000);
