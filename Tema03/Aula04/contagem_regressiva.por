
/* CLIQUE NO SINAL DE "+", � ESQUERDA, PARA EXIBIR A DESCRI��O DO EXEMPLO
 *  
 * Copyright (C) 2014 - UNIVALI - Universidade do Vale do Itaja�
 * 
 * Este arquivo de c�digo fonte � livre para utiliza��o, c�pia e/ou modifica��o
 * desde que este cabe�alho, contendo os direitos autorais e a descri��o do programa, 
 * seja mantido.
 * 
 * Se tiver dificuldade em compreender este exemplo, acesse as v�deoaulas do Portugol 
 * Studio para auxili�-lo:
 * 
 * https://www.youtube.com/watch?v=K02TnB3IGnQ&list=PLb9yvNDCid3jQAEbNoPHtPR0SWwmRSM-t
 * 
 * Descri��o:
 * 
 * 	Este exemplo utiliza um la�o de repeti��o e uma vari�vel para exibir uma 
 * 	contagem regressiva na tela.
 * 	
 * Autores:
 * 
 * 	Giordana Maria da Costa Valle
 * 	Carlos Alexandre Krueger
 * 	
 * Data: 01/06/2013
 */

programa 
{
	inclua biblioteca Util 
	
	funcao inicio() 
	{
		inteiro contador = 10
		
		enquanto (contador > 0)
		{
			limpa()
			escreva ("Detona��o em: ", contador)
		  	
		  	contador = contador - 1
		  	Util.aguarde(1000) // Aguarda 1000 millisegundos (1 segundo)
		}

		limpa()
		escreva ("Booom!\n")
	}
}

