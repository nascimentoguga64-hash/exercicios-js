let n3 = Number(prompt("Digite o Primeiro número:"));
let n4 = Number(prompt(" Digite o Segundo número:"));
let operacao = prompt("Digite a operação desejada: (+, -, *, /)");

let resultado;
if (operacao === "+") {
    console.log(n3 + n4);
} else if (operacao === "-") {
    console.log(n3 - n4);
} else if (operacao === "*") {
    console.log(n3 * n4); 
} else if (operacao === "/") {
    console.log(n3 / n4);
} else {
    console.log("Operação inválida!")
}

