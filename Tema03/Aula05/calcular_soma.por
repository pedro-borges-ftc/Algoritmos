programa {
	funcao inicio() {
	    cadeia resposta = "s"
		real valor, soma = 0.0
        
        faca{
            //entrada de dados
            escreva("\nDigite um valor: ")
            leia(valor)
            
            //processamento
            soma = soma + valor
            
            escreva("Quer digitar um novo valor? (sim|s para continuar)")
            leia(resposta)
        }enquanto(resposta == "s" ou resposta == "sim" )
        
        //saída dos dados
        escreva("\no somatório é: ", soma)
    
	}
}
