programa {
	funcao inicio() {
		inteiro tabuada, contador
		
		//entrada de dados
        escreva("\nDigite um valor para exibir a tabuada de multiplicação: ")
        leia(tabuada)
        
        escreva("------Tabuada de multiplicação-------")
        
        para(contador = 1; contador <= 10; contador++){
            escreva("\n",tabuada , " x " , contador , " = ", (tabuada * contador))
        }
	}
}
