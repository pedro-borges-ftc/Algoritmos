programa {
  funcao inicio() {
    real precoProduto, imposto
    //taxa do imposto 60% = 60 / 100 = 0.6

    escreva("Digite o valor do produto R$")
    leia(precoProduto)

    //imposto = precoProduto * 60 / 100
    imposto = precoProduto * 0.6
    
    escreva("o valor do imposto é de R$ ", imposto)
    escreva("\no valor total do produto é de R$ ", (imposto + precoProduto))
  }
}