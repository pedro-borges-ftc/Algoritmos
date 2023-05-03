programa {
  funcao inicio() {
    //declaração das variáveis
    real litros, tempo, velocidade, distancia

    //entrada de dados
    escreva("Digite o tempo de viagem (horas): ")
    leia(tempo)

    escreva("\nDigite a velocidade média (km/h): ")
    leia(velocidade)

    //Processamento
    distancia = tempo * velocidade
    litros = distancia / 12

    //saída dos dados
    escreva("\nA velocidade média da viagem foi de: ",velocidade," km/h")
    escreva("\nO tempo da viagem foi de:",tempo," h")
    escreva("\nA distância percorrida foi de:",distancia, " km")
    escreva("\nA quantidade de litros de combustível utilizada foi de:",litros, " l")
  }
}