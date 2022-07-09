programa {
	funcao inicio() {
	    inteiro L1,L2,L3
	    logico equilatero, escaleno
	    
		escreva("Digite o valor do lado1: ")
        leia(L1)
        
        escreva("Digite o valor do lado2: ")
        leia(L2)
        
        escreva("Digite o valor do lado3: ")
        leia(L3)
        
        
        
        equilatero = (L1 == L2) e (L2 == L3)
        escaleno = (L1 != L2) e (L2 != L3) e (L1 != L3)
        
        escreva("\nO triangulo é equilátero? " , equilatero)
        escreva("\nO triangulo é escaleno? " , escaleno)

	}
}
