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

    var imc = (parseFloat(num3 / (num2 * num2)))

    var classificacao = ''

    if (imc < 20) {
        classificacao = 'Abaixo do peso'
    } else if (imc >= 20 && imc < 25) {
        classificacao = 'Peso ideal'
    } else if (imc >= 25 && imc < 30) {
        classificacao = 'Sobrepeso'
    } else if (imc >= 30 && imc < 35) {
        classificacao = 'Obesidade'
    } else if (imc >= 35){
        classificacao = 'Obesidade mórbida'
    }

    divResultado.innerHTML = `O IMC É ${imc.toFixed(2).replace('.',',')}` + `CLASSIFICAÇÃO: ${classificacao}`
})