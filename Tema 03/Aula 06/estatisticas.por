programa {
	funcao inicio() {
	    cadeia resposta = "s"
		real valor = 0.0, media = 0.0, maior = 0.0, menor = 0.0, soma = 0.0
		inteiro contador, qtdEntrevistas
		
		escreva("\nDigite a quantidade de entrevistas: ")
            leia(qtdEntrevistas)
        
        para(contador = 1; contador <= qtdEntrevistas; contador++){
            //entrada de dados
            escreva("\nDigite um valor: ")
            leia(valor)
            
            //processamento
            soma = soma + valor
            
            se(valor > maior ou maior == 0.0){
                maior = valor
            }
            
            se(valor < menor ou menor == 0.0){
                menor = valor
            }
        }
        
        media = soma / qtdEntrevistas
        
        //sa�da dos dados
        escreva("\no somat�rio �: ", soma)
        escreva("\na m�dia �: ", media)
        escreva("\no maior �: ", maior)
        escreva("\no menor �: ", menor)
    
	}
}
