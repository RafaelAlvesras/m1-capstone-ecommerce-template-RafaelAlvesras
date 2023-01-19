let products = [
    {
        imagem: "./assets/img/amaciante conforto.png",
        nome: "Amaciante Conforto",
        descricao: "Amaciante conforto é indicado para lavagem de tecidos ou roupas, mantendo as roupas de sua família macias.",
        preco: 7.99,
        type: "roupas"
    },
    {
        imagem: "./assets/img/amaciante carinho.png",
        nome: "Amaciante Carinho",
        descricao: "Amaciante conforto é indicado para lavagem de tecidos ou roupas, mantendo as roupas de sua família macias.",
        preco: 7.99,
        type: "roupas"
    },
    {
        imagem: "./assets/img/alvejante.png",
        nome: "Alvejante",
        descricao: "Alvejante sem Cloro  é indicado para roupas brancas ou coloridas pois não contém cloro.",
        preco: 10.99,
        type: "roupas"
    },
    {
        imagem: "./assets/img/clareador de pisos.png",
        nome: "Clareador de Pisos",
        descricao: "Clareador de pisos é um produto que veio pra trazer praticidade e segurança na limpeza de pisos.",
        preco: 22.00,
        type: "piso"
    },
    {
        imagem: "./assets/img/lava roupas ação profunda.png",
        nome: "Lava Roupas Ação Profunda",
        descricao: "Lava roupas ação profunda é indicado para lavagem simples ou  pesada de roupas.",
        preco: 13.99,
        type: "roupas"
    },
    {
        imagem: "./assets/img/lava roupas de côco.png",
        nome: "Lava Roupas de Côco",
        descricao: "Lava roupas côco, oferece o máximo cuidado com as roupas para as peles delicadas.",
        preco: 13.99,
        type: "roupas"
    },
    {
        imagem: "./assets/img/lava louças neutro.png",
        nome: "Lava Louças Neutro",
        descricao: "Produto indicado para lavagem de louças, copos, talheres e utensílios domésticos.",
        preco: 8.99,
        type: "cozinha"
    },
    {
        imagem: "./assets/img/limpador de aluminios.png",
        nome: "Limpador de Alumínios",
        descricao: "Produto indicado para limpeza de utensílios de alumínio em geral.",
        preco: 13.99,
        type: "cozinha"
    },
    {
        imagem: "./assets/img/multiuso.png",
        nome: "Multiuso",
        descricao: "Produto indicado para limpeza geral em pisos, cozinhas, móveis, utensílios, eletrodomésticos etc.",
        preco: 10.99,
        type: "cozinha"
    },
    {
        imagem: "./assets/img/pinho gel.png",
        nome: "Pinho Gel",
        descricao: "Limpa Pisos Pinho Gel, força máxima na limpeza de pisos em qualquer parte da casa.",
        preco: 12.99,
        type: "piso"
    }
]

let vitrine = document.querySelector("ul")
const ulCar = document.querySelector(".divCarrinho")
const divCar = document.querySelector(".carrinhoList")
let contItens = 0
let valorTotal = 0

function renderProducts() {
    for (let i = 0; i < products.length; i++) {
        let listCard = document.createElement("li")
        vitrine.appendChild(listCard)
        let img = document.createElement("img")
        listCard.appendChild(img)
        img.src = products[i].imagem
        img.alt = "produto de limpeza"
        let nome = document.createElement("h2")
        listCard.appendChild(nome)
        nome.innerText = products[i].nome
        let descricao = document.createElement("p")
        listCard.appendChild(descricao)
        descricao.innerText = products[i].descricao
        let preco = document.createElement("h3")
        listCard.appendChild(preco)
        preco.innerText = products[i].preco.toFixed(2)
        let buttonAdd = document.createElement("button")
        listCard.appendChild(buttonAdd)
        buttonAdd.innerText = "Adicionar ao Carrinho"
        buttonAdd.classList.add("buttonAdd")
        buttonAdd.addEventListener("click", function () {
            contItens++
            document.querySelector(".contadorItens").innerText = contItens
            const listaDeProduto = document.createElement("li")
            divCar.appendChild(listaDeProduto)
            const productName = document.createElement("p")
            listaDeProduto.appendChild(productName)
            listaDeProduto.classList.add("listCard")
            productName.innerText = products[i].nome
            productName.classList.add("nomeCarr")
            const valorDoProduto = document.createElement("p")
            valorDoProduto.innerText = products[i].preco.toFixed(2)
            valorDoProduto.classList.add("valorCarr")
            listaDeProduto.appendChild(valorDoProduto)
            valorTotal += products[i].preco
            document.querySelector(".somaFinal").innerHTML = valorTotal
            const delButton = document.createElement("button")
            listaDeProduto.appendChild(delButton)
            delButton.innerText = "remover item"
            delButton.classList.add("delButton")
            delButton.addEventListener("click", function () {
                contItens -- 
                document.querySelector(".contadorItens").innerText = contItens
                listaDeProduto.remove()
                valorTotal -= products[i].preco
            document.querySelector(".somaFinal").innerHTML = valorTotal
 
            })
        })
    }
}

renderProducts()
























