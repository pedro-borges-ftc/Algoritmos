//Criação de Array de Produtos
var vetorProdutos = [[1, "Feijão", 8.0],
[2, "Arroz", 6.0],
[3, "Carne", 30.0],
[4, "Farinha", 7.0],
[5, "Sal", 2.0],
[6, "Açúcar", 5.0],
[7, "Café", 7.5],
[8, "Cebola", 4.99],
[9, "Tomate", 5.59]]

//Referenciando os widgets no HTML
var cbProduto = document.getElementById("cbProduto")
var tableprodutos = document.getElementById("tableprodutos")
var txtquantproduto = document.getElementById("txtquantproduto")
var txtvalorunitario = document.getElementById("txtvalorunitario")
var txtvalorproduto = document.getElementById("txtvalorproduto")
var txttotalcompra = document.getElementById("txttotalcompra")
var txtdinheiro = document.getElementById("txtdinheiro")
var txttroco = document.getElementById("txttroco")

function montaPagina() {
    for (i = 0; i < vetorProdutos.length; i++) {
        let opcao = document.createElement('option')

        opcao.value = vetorProdutos[i][2]
        opcao.text = vetorProdutos[i][0] + " - " + vetorProdutos[i][1]
        //+ " R$ " + vetorProdutos[i][2].toFixed(2).replace('.',',')

        //cbProduto.add(opcao,cbProduto.options[i])
        cbProduto.appendChild(opcao)
    }
}

function selecionaProduto() {
    //window.alert(cbProduto.value)
    txtvalorunitario.value = Number(cbProduto.value).toFixed(2)

    let quant = Number(txtquantproduto.value)
    let vlrunit = Number(txtvalorunitario.value)
    let vlrprod = quant * vlrunit

    txtvalorproduto.value = vlrprod.toFixed(2)
}

function adicionarProduto() {
    if (validaQuant()) {
        let valorUnitario = Number(txtvalorunitario.value.replace(',', '.'))
        let valorProduto = Number(txtvalorproduto.value.replace(',', '.'))
        let totalCompra = Number(txttotalcompra.value.replace(',', '.'))

        totalCompra += valorProduto

        let linha = document.createElement('tr')
        let coluna1 = document.createElement('td')
        let coluna2 = document.createElement('td')
        let coluna3 = document.createElement('td')
        let coluna4 = document.createElement('td')

        coluna1.innerHTML = cbProduto.options[cbProduto.selectedIndex].text
        coluna2.innerHTML = txtquantproduto.value
        coluna3.innerHTML = valorUnitario.toFixed(2).replace('.', ',')
        coluna4.innerHTML = valorProduto.toFixed(2).replace('.', ',')

        linha.appendChild(coluna1)
        linha.appendChild(coluna2)
        linha.appendChild(coluna3)
        linha.appendChild(coluna4)
        tableprodutos.appendChild(linha)

        txtvalorproduto.value = ''
        txtquantproduto.value = ''
        txtvalorunitario.value = ''
        cbProduto.value = 0
        txttotalcompra.value = totalCompra.toFixed(2)
        cbProduto.focus()
    }
}

function caltularTroco() {
    if (validaTroco()) {
        let totalCompra = Number(txttotalcompra.value)
        let dinheiro = Number(txtdinheiro.value)
        let troco = dinheiro - totalCompra

        txttroco.value = troco.toFixed(2).replace('.', ',')
    }
}

function validaQuant() {
    if (Number(txtquantproduto.value) <= 0) {
        txtquantproduto.style.background = "yellow"
        alert('Quantidade é obrigatória.')
        txtquantproduto.focus()
        return false
    } else {
        txtquantproduto.style.background = "white"
        selecionaProduto()
        return true
    }
}

function validaTroco() {
    if (Number(txtdinheiro.value) < Number(txttotalcompra.value)) {
        txtdinheiro.style.background = "yellow"
        alert('Dinheiro insuficiente.')
        txtdinheiro.focus()
        return false
    } else {
        txtdinheiro.style.background = "white"
        txtdinheiro.value = Number(txtdinheiro.value).toFixed(2)
        return true
    }
}