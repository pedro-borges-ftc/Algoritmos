programa {
	funcao inicio() {
        inteiro anoAtu, anoNasc, idade
        
        //entrada de dados
        escreva("Digite o ano atual: ")
        leia(anoAtu)
        escreva("Digite o ano de nascimento: ")
        leia(anoNasc)
        
        //processamento
        idade = anoAtu - anoNasc
        
        //sa�da dos dados
        escreva("A idade �: ", idade)
        
        se(idade >= 18){
            escreva("\n� maior de idade")
        }
	}
}
