function carregarAtividade9() {

let x = Number(prompt("Primeiro número"))
let y = Number(prompt("Segundo número"))

if (x % y === 0) {
    console.log("É múltiplo")
    alert(`É múltiplo`)
} else {
    console.log("Não é múltiplo")
    alert(`Não é múltiplo`) 
}
}