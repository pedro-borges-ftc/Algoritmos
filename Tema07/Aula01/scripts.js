function imprimir() {
    //métodos de leitura dos campos no HTML
    var nome = document.getElementById("campo1")
    var nascimento = document.getElementById("campo2")
    var resultado = document.getElementById("resultado")

    //método de escrita no HTML
    resultado.value = nome.value +
        " nasceu no dia " +
        nascimento.value
}
