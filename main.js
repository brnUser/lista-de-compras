(()=> {
    const criarTarefa = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    
    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    lista.appendChild(tarefa)
    input.value = " "

}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)


const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-button')
    botaoConclui.innerHTML = "concluir"
    botaoConclui.addEventListener('click', concluiTarefa)

    return botaoConclui
}

const concluiTarefa = (evento) => {
    const botaoConclui = evento.target // ponta para onde foi clicado
    const tarefaCompleta = botaoConclui.parentElement // pega o pai do elemento
    tarefaCompleta.classList.toggle('done') // executa a classe CSS para riscar o item

}
const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')


    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)
    return botaoDeleta
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target
    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove()

    return botaoDeleta
} 
})() // IIFE