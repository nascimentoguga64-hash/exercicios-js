function carregarAtividade10() {

let user = prompt("Usuário:")
let senha = prompt("Senha:")

if(user === "admin" && senha === "1234") {
    console.log("Login bem-sucedido!")
    alert(`Login bem-sucedido!`)
} else {
    console.log("Usuário ou senha incorretos")
    alert(`Usuário ou senha incorretos`)
}

}