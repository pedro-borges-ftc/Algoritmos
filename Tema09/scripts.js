//Tema 09 - Aula 06
function classificacaoIMC(){
    //leitura dos dados do HTML
    var txtpeso = window.document.getElementById("txtpeso")
    var txtaltura = window.document.getElementById("txtaltura")
    var txtimc = window.document.getElementById("txtimc")
    var txtclassificacao = window.document.getElementById("txtclassificacao")

    //Processamento dos dados
    var peso = Number(txtpeso.value)
    var altura = Number(txtaltura.value)
    var imc = peso / (altura * altura)
    var classificacao = ""

    if(imc < 18.5){
        classificacao = "Baixo peso"
    }else if(imc < 25){
        classificacao = "Peso Normal"
    }else if(imc < 30){
        classificacao = "Sobrepeso"
    }else if(imc < 35){
        classificacao = "Obesidade grau I"
    }else if(imc < 40){
        classificacao = "Obesidade grau II"
    }else{
        classificacao = "Obesidade grau III"
    }

    //escrita do resultado no DOM do HTML
    txtimc.value = imc.toFixed(2)
    txtclassificacao.value = classificacao
}

//Tema 09 - Aula 04
function calculadoraIMC(){
    //leitura dos dados do HTML
    var txtpeso = window.document.getElementById("txtpeso")
    var txtaltura = window.document.getElementById("txtaltura")
    var txtresultado = window.document.getElementById("txtresultado")

    //Processamento dos dados
    var peso = Number(txtpeso.value)
    var altura = Number(txtaltura.value)
    var imc = peso / (altura * altura)
    var resultado = ""

    if(imc >= 18.2 && imc <= 25){
        resultado = `IMC = ${imc}. Está no peso ideal`
    }else{
        resultado = `IMC = ${imc}. Não está no peso ideal`
    }

    //escrita do resultado no DOM do HTML
    txtresultado.value = resultado
}

//Tema 09 - Aula 02
function testadorTriangulos(){
    //leitura dos dados do HTML
    var txtvalor_l1 = window.document.getElementById("txtvalor_l1")
    var txtvalor_l2 = window.document.getElementById("txtvalor_l2")
    var txtvalor_l3 = window.document.getElementById("txtvalor_l3")
    var txtequilatero = window.document.getElementById("txtequilatero")
    var txtescaleno = window.document.getElementById("txtescaleno")

    //Processamento dos dados
    var eh_equilatero = Number(txtvalor_l1.value) == Number(txtvalor_l2.value) &&
                        Number(txtvalor_l2.value) == Number(txtvalor_l3.value)

    var eh_escaleno = Number(txtvalor_l1.value) != Number(txtvalor_l2.value) &&
                       Number(txtvalor_l2.value) != Number(txtvalor_l3.value) &&
                       Number(txtvalor_l1.value) != Number(txtvalor_l3.value)

    //escrita do resultado no DOM do HTML
    txtequilatero.value = eh_equilatero
    txtescaleno.value = eh_escaleno
}