function carregarAtividade4(){

let n1 = Number(prompt("Digite o Primeiro número:"));
let n2 = Number(prompt("Digite o Segundo número:"));

if (n1 > n2) {
    console.log("O número maior é: " + n1)
} else if (n2 > n1){
    console.log("O número maior é: " + n2)
} else {
    console.log("São iguais")
}

}