programa {
	funcao inicio() {
		real nota1, nota2, media
        
        //entrada de dados
        escreva("Digite a nota 1 do aluno: ")
        leia(nota1)
        escreva("Digite a nota 2 do aluno:")
        leia(nota2)
        
        //processamento
        media = ( nota1 + nota2 ) / 2
        
        //sa�da dos dados
        escreva("M�dia do aluno: ", media)
        
        se(media >= 7){
            escreva("\no aluno est� aprovado!")
        }senao se(media >= 5){
            escreva("\no aluno est� em recupera��o")
        }senao{
            escreva("\no aluno est� reprovado")
        }
	}
}
