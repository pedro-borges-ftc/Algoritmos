//Tema 08 - Aula 05
function calculadoraJurosSimples(){
    //leitura dos dados do HTML
    var txtvalorinicial = window.document.getElementById("txtvalorinicial")
    var txttaxa = window.document.getElementById("txttaxa")
    var txtperiodo = window.document.getElementById("txtperiodo")
    var txtjuros = window.document.getElementById("txtjuros")
    var txttotal = window.document.getElementById("txttotal")

    //Processamento dos dados
    var valorinicial = Number(txtvalorinicial.value)
    var taxa = Number(txttaxa.value)
    var periodo = Number(txtperiodo.value)

    var juros = valorinicial * taxa / 100 * periodo
    var total = valorinicial + juros

    //escrita do resultado no DOM do HTML
    txtjuros.value =  juros.toFixed(2).replace('.', ',')
    txttotal.value = total.toFixed(2).replace('.', ',')
}

function validaValorInicial(){
    var txtvalorinicial = window.document.getElementById("txtvalorinicial")
    if(Number(txtvalorinicial.value) <= 0){
        txtvalorinicial.style.background = "yellow"
        alert('Valor inicial é obrigatório.')
        return false
    }else{
        txtvalorinicial.style.background = "white"
        return true
    }
}

function validaTaxa(){
    var txttaxa = window.document.getElementById("txttaxa")
    if(Number(txttaxa.value) <= 0 || Number(txttaxa.value) >= 100){
        txttaxa.style.background = "yellow"
        alert('Taxa é obrigatória. (0,1 e 99,99)')
        return false
    }else{
        txttaxa.style.background = "white"
        return true
    }
}

function validaPeriodo(){
    var txtperiodo = window.document.getElementById("txtperiodo")
    if(Number(txtperiodo.value) <= 1 || Number(txtperiodo.value) >= 24){
        txtperiodo.style.background = "yellow"
        alert('Período é obrigatório. (1 e 24)')
        return false
    }else{
        txtperiodo.style.background = "white"
        return true
    }
}