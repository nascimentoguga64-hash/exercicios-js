let peso = Number(prompt("Peso"))
let altura = Number (prompt("Altura"))
let imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log("Abaixo do peso");
    alert (`Abaixo do peso!`)
} else if (imc < 25) {
    console.log("Peso adequado")
    alert (`Peso normal!`)
} else {
    console.log("Acima do peso")
    alert (`Acima do peso!`)
}