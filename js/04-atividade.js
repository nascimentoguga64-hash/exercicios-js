let n1 = Number(prompt("Primeiro número:"));
let n2 = Number(prompt("Segundo número:"));

if (n1 > n2) {
    console.log("O número maior é: " + n1)
  alert ("O número maior é: " + n1)
} else if (n2 > n1){
    console.log("O número maior é: " + n2)
    alert ("O número maior é: " + n2)
} else {
    console.log("São igauis")
    alert (`São iguais!`)
}