const prompt = require("prompt-sync")()
const livros = []

let contId = 1


function getIndice(id) {
    const indice = residencias.findIndex((el) => el.id == id);

    if (indice == -1) {
    console.log("ID inexistente");
    }
    return indice;
}

const modelo = (id) => {
    const titulo = prompt("Qual o título do livro? ")
    const autor = prompt("Qual o autor? ")
    const ano = +prompt("Qual o ano de lançamento? ")
    const genero = prompt("Qual gênero? ")

    const versoes_novas = []
    const verifica = prompt("Existem novas versões? ")

    if(verifica === "sim"){
        while(true){
            const anoL = +prompt("Qual o ano da nova versão? (Digite '0' para sair!)  ")


            if(anoL === 0){
                break
            }else{
            versoes_novas.push(anoL)}
        }

    }

    if(titulo !== "" && autor !== "" && !isNaN(ano) && genero !== ""){
        if (id === undefined) {
            return {
            titulo,
            autor,
            ano,
            genero,
            versoes_novas,
            id: contId++,
            };
        } else {
            return {
            titulo,
            autor,
            ano,
            genero,
            versoes_novas,
            id
            };
        }
    }else{
        console.log("Dados inválidos")
        return undefined
    }
}

const criar = () => {
    const livro = modelo()
    if(livro !== undefined){
        livros.push(livro)
        console.log("Livro cadastrado com sucesso!")
    }
}

const listar = () => {
    if(livros.length == 0){
        console.log("Nenhum livro cadastrado")
        return
    }else{
        livros.forEach((livro, indice) => {
        console.log(`
        ID: ${livro.id}
        Título: ${livro.titulo}
        Autor: ${livro.autor}
        Ano de lançamento: ${livro.ano}
        Gênero: ${livro.genero}`)

        livro.versoes_novas.forEach((versao, indice) => {
            console.log(`Ano de novas versões: ${indice + 1}: ${versao}`);
        })
    })
    }}

    const atualizar = () => {
        listar()
        
        const id = +prompt("Qual ID deseja atualizar?")
        const indice = getIndice(id);
    
        if (indice !== -1) {
            let livroEdit = modelo(id);
            
            if (livroEdit !== undefined) {
            livros[indice] = livroEdit;
            console.log("Livro Atualizadop!");
            }
        }else {
            console.log("ID inexistente");
        }
        }

        const deletar = () => {
            listar()
            const id = parseInt(prompt("Qual ID deseja remover: "));
        
            const indice = livros.findIndex((livro) => id === livro.id);
            
            if (indice !== -1) {
                livros.splice(indice, 1);
                console.log("Livro removido!");
            } else {
                console.log("ID inexistente");
            }
            }

const buscar = () => {
    console.log(`1. BUSCA POR TÍTULO
    2. BUSCA POR AUTOR
    3. BUSCA POR ANO
    4. BUSCA POR GENERO`)

    const opc = +prompt("Qual sua opção? ")

    let key
    let value

    switch (opc) {
        case 1:
            key = "titulo"
            value = prompt("Digite o título do livro: ")
            break;
        case 2:
            key = "autor"
            value = prompt("Digite o autor do livro: ")
            break;
        case 3:
            key = "ano"
            value = prompt("Digite o ano do livro: ")
            break;
        case 4:
            key = "genero"
            value = prompt("Digite o gênero do livro: ")
            break;
        default:
            console.log("OPÇÃO INVÁLIDA")
            break;
    }
//                              ((     )    callback           )
    const result = livros.filter((livro) => livro[key] == value) //filter retorna posiçao inteira da busca RESULT VIRA ARRAY COM A OPCAO DA BUSCA
    //  ex:      pego o array livro, na chave AUTOR se for igual value, ele pega a posição inteira do livro com esse autor

    if(result.length > 0){
        result.forEach((livro) => {
            console.log(`
            ID: ${livro.id}
            Título: ${livro.titulo}
            Autor: ${livro.autor}
            Ano de lançamento: ${livro.ano}
            Gênero: ${livro.genero}
            `)

            livro.versoes_novas.forEach((versao, indice) => {
                console.log(`Ano de novas versões: ${indice + 1}: ${versao}`);
            })
        }
    
    )
    }else{
        console.log("Livro não encontrado")
    }
}

    module.exports = {
        criar,
        atualizar,
        listar,
        deletar,
        buscar
    }