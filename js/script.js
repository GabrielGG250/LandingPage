const menu = document.querySelector(".cabecalho-menu")

const botao = document.querySelector("#botao")

botao.addEventListener("click", function() {
    menu.classList.toggle("hide")
})