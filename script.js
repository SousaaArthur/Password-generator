//Referências dos elementos HTML
let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');
let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');
let copyText = document.getElementById('copyText')
let containerPassword = document.querySelector('#containerPassword');
let checkbox = document.getElementById('checkbox');
let textCheckbox = document.getElementById('textCheckbox');

//Conjuntos de caracteres para geração de senhas
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234567890";
let numerset = "1234567890";

// Variável para armazenar a nova senha gerada
let newPassword = "";

// Atualiza o valor exibido do tamanho da senha conforme o valor do slider
sizePassword.innerHTML = sliderElement.value;

// Atualiza o valor exibido do tamanho da senha conforme o valor do slider é alterado
slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

// Função para gerar uma nova senha
function generatePassword() {
    let pass = "";
    
    // Verifica se o checkbox está marcado para selecionar o conjunto de caracteres
    if (checkbox.checked) {
        // Gera uma senha aleatória com base no conjunto de caracteres completo
        for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
            pass += charset.charAt(Math.floor(Math.random() * n));
        }
    } else {
        // Gera uma senha aleatória apenas com números
        for (let i = 0, n = numerset.length; i < sliderElement.value; ++i) {
            pass += numerset.charAt(Math.floor(Math.random() * n));
        }
    }
    
    // Exibe a senha gerada e torna o container visível
    containerPassword.classList.remove("hide");
    copyText.innerText = "Clique na senha para copiar!";
    password.innerHTML = pass;
    newPassword = pass;
}

// Função para copiar a senha para a área de transferência
function copyPassword() {
    navigator.clipboard.writeText(newPassword);
    copyText.innerText = "Senha copiada com sucesso!";
}

function changeText() {
    copyText.innerText = "Clique na senha para copiar!";
}
