function carregarAtividade5(){

let nota = Number(prompt("Informe uma nota de 0 a 10:"));

if (nota >=0 && nota <=4) {
    console.log("Nota baixa");
    alert (`Nota baixa!`);

} else if (nota <=7) {
    console.log("Nota média")
    alert (`Nota média!`)

} else if (nota <=10) {
    console.log("Nota alta");
    alert (`Nota alta!`)
} else {
    console.log("Nota inválida")
    alert (`Nota inválida!`)
}

}