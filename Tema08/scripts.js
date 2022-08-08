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

//Tema 08 - Aula 04
function calculadoraImpostos(){
    //leitura dos dados do HTML
    var txtproduto = window.document.getElementById("txtproduto")
    var txtimposto = window.document.getElementById("txtimposto")
    var txttotalproduto = window.document.getElementById("txttotalproduto")

    //Processamento dos dados
    var produto = Number(txtproduto.value)
    var imposto = produto * 60 / 100
    var totalproduto = produto + imposto

    //escrita do resultado no DOM do HTML
    txtimposto.value =  imposto.toFixed(2).replace('.', ',')
    txttotalproduto.value = totalproduto.toFixed(2).replace('.', ',')
}

//Tema 08 - Aula 03
function conversorTemperaturas(){
    //leitura dos dados do HTML
    var txtfahrenheit = window.document.getElementById("txtfahrenheit")
    var txtcelsius = window.document.getElementById("txtcelsius")

    //Processamento dos dados
    var fahrenheit = Number(txtfahrenheit.value)
    var celsius = 5 / 9 * (fahrenheit  - 32)

    //escrita do resultado no DOM do HTML
    txtcelsius.value = fahrenheit + " ºF = " + celsius.toFixed(2) + " ºC"
}

//Tema 08 - Aula 02
function conversorMoedas(){
    //leitura dos dados do HTML
    var txtvalor = window.document.getElementById("txtvalor")
    var txtresultado = window.document.getElementById("txtresultado")

    //Processamento dos dados
    var valor = Number(txtvalor.value)
    var resultado = valor / 5.3

    //escrita do resultado no DOM do HTML
    txtresultado.value = "" + resultado.toFixed(2)
}

//Tema 08 - Aula 01
function calcularidade(){
    //leitura dos dados do HTML
    var txtdata = window.document.getElementById("txtdata")
    var txtresultado = window.document.getElementById("txtresultado")

    //Processamento dos dados
    var dataNasc = new Date(txtdata.value)
    var hoje = new Date()

    var resultado = Math.floor(
                            Math.ceil(
                                Math.abs( dataNasc.getTime() - hoje.getTime()) 
                                / (1000 * 3600 * 24)
                                    ) / 365.25
                                )

    //escrita do resultado no DOM do HTML
    txtresultado.value = "A idade é " + resultado + " ano(s)"
}