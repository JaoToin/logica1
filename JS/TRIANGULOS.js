//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    var num1 = parseFloat(form_num.get('num1'))
    var num2 = parseFloat(form_num.get('num2'))
    var num3 = parseFloat(form_num.get('num3'))


    var tipoTriangulo = ''

    if (num1 === num2 && num2 === num3) {
        tipoTriangulo = 'Equilátero'
    } else if (num1 === num2 || num2 === num3 || num1 === num3) {
        tipoTriangulo = 'Isósceles'
    } else {
        tipoTriangulo = 'Escaleno'
    }

    divResultado.innerHTML = `O triângulo é ${tipoTriangulo}.`
})