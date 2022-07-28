function somar(){
    //leitura dos dados do HTML
    var tn1 = window.document.getElementById("txtnum1")
    var tn2 = window.document.getElementById("txtnum2")
    var resultado = window.document.getElementById("txttotal")

    var num1 = Number(tn1.value)
    var num2 = Number(tn2.value)
    var soma = num1 + num2

    //escrita do resultado no DOM do HTML
    resultado.value = soma
}