let n1 = Number(prompt("Primeiro número:"))
let n2 = Number(prompt("Segundo número:"))
let op = prompt("Operação(+, -, *, /)")

switch (op){
case "+":
    let soma = n1 + n2;
alert(`O resultado da soma é: ${soma}`)
    console.log("O resultado da soma é: " + soma)
   
    break
    
case "-":
    let subtracao = n1 - n2;
alert(`O resultado da subtração é: ${subtracao}`)
    console.log("O resultado da subtração é: " + subtracao)
    break

case "*":
    let multiplicacao = n1 * n2;
alert(`O resultado da multiplicação é: ${multiplicacao}`)
    console.log("O resultado da multiplicação é: " + multiplicacao)
    break

case "/":
      let divisao = n1 / n2;
alert(`O resultado da divisão é: ${divisao}`)
    console.log("O resultado da divisão é: " + divisao)
    break

default:
    console.log("Operação inválida!")
    alert(`operação inválida!`)
}