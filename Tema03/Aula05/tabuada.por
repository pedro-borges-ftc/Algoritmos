programa {
	funcao inicio() {
		inteiro tabuada, contador = 1
		
		//entrada de dados
        escreva("\nDigite um valor para exibir a tabuada de multiplica��o: ")
        leia(tabuada)
        
        escreva("------Tabuada de multiplica��o-------\n")
        
        faca{
            escreva("\n",tabuada , " x " , contador , " = ", (tabuada * contador))
            contador = contador + 1
        }enquanto(contador <= 10)
	}
}
