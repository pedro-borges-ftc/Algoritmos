programa {
	funcao inicio() {
	    inteiro contador = 1
		real valor, soma = 0.0
        
        enquanto(contador <= 10){
            //entrada de dados
            escreva("\nDigite um valor: ")
            leia(valor)
            
            //processamento
            soma = soma + valor
            
            contador = contador + 1
        }
        
        //saída dos dados
        escreva("\no somatório é: ", soma)
    
	}
}
