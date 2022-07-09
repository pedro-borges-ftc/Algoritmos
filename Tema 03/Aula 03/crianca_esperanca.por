programa {
	funcao inicio() {
	    inteiro doacao
	    //entrada de dados
		escreva("\n----------------------")
		escreva("\n--Criança Esperança---")
		escreva("\n----------------------")
		escreva("\nPara doar R$ 10,00\tDigite 10")
		escreva("\nPara doar R$ 20,00\tDigite 20")
		escreva("\nPara doar R$ 40,00\tDigite 40")
		escreva("\nPara doar R$ 80,00\tDigite 80\n")
		leia(doacao)
		
		limpa()
		//saida dos dados
		escolha(doacao){
		    caso 10:
		        escreva("\nObrigado por doar R$ 10,00")
		    pare
		    caso 20:
		        escreva("\nObrigado por doar R$ 20,00")
		    pare
		    caso 40:
		        escreva("\nObrigado por doar R$ 40,00")
		    pare
		    caso 80:
		        escreva("\nObrigado por doar R$ 80,00")
		    pare
		    caso contrario:
		        escreva("\nOpção inválida")
		}
	}
}
