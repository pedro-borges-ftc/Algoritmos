function calcularidade(){
    //Leitura dos valores digitados
    var txtdata = window.document.getElementById('txtdata')
    var txtresultado = window.document.getElementById('txtresultado')

    var dataNasc = new Date(txtdata.value)
    var hoje = new Date()
    var resultado = Math.floor(
                        Math.ceil(
                            Math.abs( dataNasc.getTime() - hoje.getTime()) 
                            / (1000 * 3600 * 24)
                                ) / 365.25
                            )

    txtresultado.value = "A idade é " + resultado + " ano(s)"
}

function somar(){
    //Leitura dos valores digitados
    var tn1 = window.document.getElementById('txtnum1')
    var tn2 = window.document.getElementById('txtnum2')
    var tr = window.document.getElementById('txtresultado')

    var num1 = Number(tn1.value)
    var num2 = Number(tn2.value)
    var resultado = num1 + num2

    tr.value = resultado   //Atribuição do resultado
}