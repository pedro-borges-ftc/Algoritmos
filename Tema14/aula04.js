function adicao(a, b) { return a + b }
function subtracao(a, b) { return a - b }
function multiplicacao(a, b) { return a * b }
function divisao(a, b) { return a / b }

function calculadora(operando, oper1, oper2) {

    switch (operando) {
        case '+':
            return adicao(oper1, oper2)
            break
        case '-':
            return subtracao(oper1, oper2)
            break
        case '*':
            return multiplicacao(oper1, oper2)
            break
        case '/':
            return divisao(oper1, oper2)
            break
        defaul:
            return 0
    }
}

console.log(adicao(5,8))

console.log(calculadora('/', 13, 25))