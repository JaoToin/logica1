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
    var num4 = parseFloat(form_num.get('num4'))




    var media = (parseFloat(num2 + num3 + num4)) / parseFloat(3)



    divResultado.innerHTML = `tem como média ${media.toFixed(2).replace('.',',')} ${media >= 6 ? "aprovado" : "reprovado"}`
})