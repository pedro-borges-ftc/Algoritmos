function somar(){
    //Leitura dos valores digitados
    var tn1 = window.document.getElementById('txtnum1')
    var tn2 = window.document.getElementById('txtnum2')

    var num1 = Number(tn1.value)
    var num2 = Number(tn2.value)
    var resultado = num1 + num2

    var txttotal = window.document.getElementById('txttotal')
    txttotal.value = resultado   //Atribuição do resultado
}