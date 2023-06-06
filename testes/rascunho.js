function entradaDeDados(texto){
    return prompt(texto)
}

let x = 5
var y = 10
const z = 15

function foo(){
    let x = 20
    var y = 25
    const z = 30
    console.log(`${x} + ${y} + ${z}`)
    console.log(x + y + z)
}

foo()

console.log(`${x} + ${y} + ${z}`)
console.log(x + y + z)