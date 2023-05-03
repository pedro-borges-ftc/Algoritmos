function calculaIdade() {
    //métodos de leitura dos campos no HTML
    var resultado = document.getElementById("resultado")
    var dataNascimento = document.getElementById("dataNascimento").valueAsDate
    var ano = dataNascimento.getUTCFullYear()
    var idadeAtual = idade(1,1,ano)
    
    //método de escrita no HTML
    resultado.value = " sua idade é " + idadeAtual
}

function idade(dia, mes, ano) {
    return new Date().getFullYear() - ano;
 }