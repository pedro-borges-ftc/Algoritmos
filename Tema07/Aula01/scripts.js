function imprimir() {
    //métodos de leitura dos campos no HTML
    var nome = document.getElementById("nome")
    var dataNascimento = document.getElementById("dataNascimento")
    var resultado = document.getElementById("resultado")

    //método de escrita no HTML
    resultado.value = nome.value +
        " nasceu no dia " +
        dataNascimento.value
}