arrayCarrinho = []

listaProdutosLoja = [
    { id: 1, nome: 'Curso de java', preco: 27.90, img: './img/java.png' },
    { id: 2, nome: 'Curso de python', preco: 40.90, img: './img/python.jpg' },
    { id: 3, nome: 'Curso de front-end | HTML, CSS & JS', preco: 35.00, img: './img/imagemHtml.jpg' },
    { id: 4, nome: 'Curso de Redes', preco: 40, img: './img/redes.png' },
    { id: 5, nome: 'Curso de Hardware', preco: 79.90, img: './img/hardware.jpg' }
]



function comprarItem(id) {
    var valorTotal = 0
    var prod = listaProdutosLoja.find(x => x.id == id)
    arrayCarrinho.push({ nome: prod.nome, preco: prod.preco, total: valorTotal, img: prod.img })
    salvarCarrinho()
    exibirProdutos()
}
function exibirProdutos() {
    var codHTML = ''
    var valorTotal = 0
    var posicao = 0;
    arrayCarrinho.forEach(prod => {
        codHTML += ` <div class="resCarrinho">  <img src="${prod.img}" alt=""> <h3>-${prod.nome}| R$ ${prod.preco}<a href='javascript:void(0)' onclick='limparCarrinho(${posicao})'>X</a></h3> </div>`
        valorTotal += prod.preco
        posicao++
    });

    var subTotal = `<h2 class="valorTotal">- Subtotal: R$${valorTotal}`
    document.getElementById('subTotal').innerHTML = subTotal

    document.getElementById('carrinho').innerHTML = codHTML
}

function salvarCarrinho() {
    localStorage.setItem('loja', JSON.stringify(arrayCarrinho))
}

function obterCarrinho() {
    if (localStorage.getItem('loja') != null) {
        arrayCarrinho = JSON.parse(localStorage.getItem('loja'))
        exibirProdutos()
    }
}


function limparCarrinho() {
    listaProdutosLoja.splice()
    salvarCarrinho()
    obterCarrinho()

}

function limparCarrinho(posicao) {
    arrayCarrinho.splice(posicao, 1)
    salvarCarrinho()
    obterCarrinho()
}
function excluirTodos() {
    arrayCarrinho = [];
    salvarCarrinho()
    obterCarrinho()

}

function exibirCarrinhoVazio() {
    if (arrayCarrinho != '') {
        document.getElementById('CarrinhoVazio').style.display = 'none'
    }
    else {
        obterCarrinho()
    }
}
function finalizarCompra() {
    if (arrayCarrinho == '') {
        alert('Adicione algo ao carrinho!')
    }
    else {

    }
}

obterCarrinho()

