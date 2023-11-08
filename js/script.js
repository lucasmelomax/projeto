const botaoHeader = document.querySelector('[data-menu="btn"]');
const ulHeader = document.querySelector('[data-menu="ul"]');

function openButao(){
    botaoHeader.classList.toggle('ativo');
    ulHeader.classList.toggle('ativo');
}

botaoHeader.addEventListener('click', openButao)

console.log(botaoHeader, ulHeader);