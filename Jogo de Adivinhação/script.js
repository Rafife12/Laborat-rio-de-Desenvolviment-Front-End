let numeroCorreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

document.getElementById('submit-btn').addEventListener('click', function() {
    const palpite = parseInt(document.getElementById('palpite').value);
    tentativas++;

    let message = document.getElementById('message');

    if (palpite < numeroCorreto) {
        message.textContent = "Muito baixo!";
        message.className = "message";
    } else if (palpite > numeroCorreto) {
        message.textContent = "Muito alto!";
        message.className = "message";
    } else {
        message.textContent = `Acertou! O número era ${numeroCorreto}. Tentativas: ${tentativas}`;
        message.className = "message";
        document.getElementById('palpite').disabled = true;
    }
});
