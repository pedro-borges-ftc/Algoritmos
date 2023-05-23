//Programa gerador de tabuada
var numero = 1
var contador = 1
while(numero <= 10){
    console.log(`----Tabuada de Multiplicação do ${numero}----`)
    while(contador <= 10){    
        console.log(`${numero} x ${contador} = ${numero * contador}`)
        contador++
    }  
    contador = 1  
    numero++
}