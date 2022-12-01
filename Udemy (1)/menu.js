const botao = document.getElementById('burguer')
const menuMobile = document.getElementById('menu-mobile')
botao.addEventListener('click', abrir)

function abrir() {
    menuMobile.classList.toggle('active')
    botao.classList.toggle('active')
}

function alert() {
    swal("Login Efetuado com Sucesso", " ", "success");
    setTimeout(goToIndex, 2000)
}

function goToIndex() {
    location.href = "index.html"
    // alert('Login efetuado com sucesso')
}