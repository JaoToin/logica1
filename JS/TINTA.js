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


    var multiplicaçao = (parseFloat(num1 * num2))



    divResultado.innerHTML = `A área é ${multiplicaçao.toFixed(2).replace('.',',')} metros quadrados. são necessarios ${multiplicaçao / 2}l`
})