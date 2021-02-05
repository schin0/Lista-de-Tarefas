let tarefas = [] // Array das tarefas

function botaoExcluirTarefa(tarefa) { // Function que cria o botao que exclui as tarefas
    let botaoExcluir = document.createElement("button") //Cria o elemetno botao 
    const excluir = document.createTextNode("-") //Cria o texto de dentro do botao
    const posicao = tarefas.indexOf(tarefa) // Nos retorna o índice
    botaoExcluir.setAttribute("class", "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent") // Adiciona a class do MDL lite no botaoExcluir
    botaoExcluir.setAttribute("id", "botaoExcluir") // Seta um id="botaoExcluir" *fica melhor para selecionar no CSS
    botaoExcluir.setAttribute("href", "#") // Atributo href do botão será vazio
    botaoExcluir.setAttribute("onclick", `excluirTarefa("${posicao}")`) // Ao clicar no botao, a funcao excluirTarefa exclui aquela determinada posição do array
    botaoExcluir.appendChild(excluir)
    return botaoExcluir
}

function listarTarefas() {
    const listaDeTarefas = document.getElementById("listaTarefas") // Busca na DOM o elemento com id="listaTarefas"
    listaDeTarefas.innerHTML = ""  // Limpa todos os elementos anteriores
    for (tarefa of tarefas) {
        const novaTarefa = document.createElement("li") // Cria itens dentro da Ul
        listaDeTarefas.appendChild(novaTarefa)

        const textoDigitado = document.createTextNode(tarefa) // Cria um texto 

        novaTarefa.appendChild(textoDigitado) // coloca um "filho" na const novaTarefa 
        novaTarefa.appendChild(botaoExcluirTarefa(tarefa)) // Ao chamar a func botaoExcluirTarefa, passamos o parâmetro dentro dela
    }
}

const inputTarefa = document.getElementById("nova_tarefa") // Busco o input e crio uma const

function addTarefa() {
    let novaTarefa0 = inputTarefa.value // Busca o valor do elemento com id="nova_tarefa"
    tarefas.push(novaTarefa0)
    inputTarefa.value = '' // Limpa o valor do input
    listarTarefas()
    alert("Sua tarefa foi adicionada")
}


function excluirTarefa(posicao) {
    tarefas.splice(posicao, 1) // Remove elementos do array
    listarTarefas()
}

listarTarefas()