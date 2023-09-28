// primeiro de tudo, selecionar os componentes necessários
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");

// Funcao de gerar qrcode
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value; // pega o valor que foi digitado no campo input

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando código..."
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`; // Link da api https://goqr.me/api/

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");

        qrCodeBtn.innerText = "QR-Code gerado com sucesso!"
    });

}

// Evento Listener de click no botão
qrCodeBtn.addEventListener("click", () => { // adiciona o evento de click ao botao qrCode e chama a funcao de pegar o valor do campo input
    generateQrCode();
});
// Adicionar o evento a partir do 'ENTER' do teclado
qrCodeInput.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        generateQrCode();
    };
});

// Limpar área do QR-CODE
qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR-Code"
    }
})