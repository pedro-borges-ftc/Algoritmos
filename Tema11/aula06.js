var n_esimo_termo = 23
var antecessor = 1
var atual = 1

resultado = antecessor + ", " + atual

for(i=3; i <= n_esimo_termo; i++){
    let aux = atual
    atual = antecessor + atual
    antecessor = aux

    resultado += ", " + atual
}

console.log(resultado)