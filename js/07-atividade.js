let n1 = Number(prompt("Primeiro número:"))
let n2 = Number(prompt("Segundo número:"))
let op = prompt("Operação(+, -, *, /)")

switch (op){
case "+":
    alert(n1 + n2)
    break
    
case "-":
    alert(n1 - n2)
    break

case "*":
    alert(n1 * n2)
    break

case "/":
    alert(n1 / n2)
    break

default:
    alert("Operação inválida")
}