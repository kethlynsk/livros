const prompt = require("prompt-sync")()
const {criar, listar, atualizar, deletar, buscar} = require("./modulos.js")

while(true){
    console.log(`
    1. Para adicionar um livro
    2. Para listar os livros
    3. Para atualizar um livro
    4. Para deletar um livro
    5. Para busca selecionada
    6. Para SAIR`)

    const opcao = +prompt("Qual sua opção? ")

    switch (opcao) {
        case 1:
            criar()
            break;
        case 2:
            listar()
            break;
        case 3:
            atualizar()
            break;
        case 4:
            deletar()
            break;
        case 5:
            buscar()
            break;
        case 6:
            process.exit()
            break;
        default:
            console.log("OPÇÃO INVÁLIDA")
            break;
    }
}