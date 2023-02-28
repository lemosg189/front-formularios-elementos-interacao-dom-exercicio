const body = document.body;

const salvar = document.querySelector('form')

let resultado = {}
let materiasFormatado = []

salvar.addEventListener('submit', (event) => {
    event.preventDefault()

    const nome = document.querySelector('#name')
    const ano = document.querySelector('#ano-nascimento')
    const cidade = document.querySelector('#cidade')
    const periodo = document.querySelector('input[name="drone"]:checked')
    const materias = document.querySelectorAll('input[name="materias"]:checked')

    for (let materia of materias) {
        materiasFormatado.push(materia.value)
    }

    resultado = {
        nome: nome.value,
        ano: ano.value,
        cidade: cidade.value,
        periodo: periodo.value,
        materiasFormatado,
    }

    console.log(resultado)
})






