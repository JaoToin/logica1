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


    var combustivelNecessario = (parseFloat(num1 / num2))


    divResultado.innerHTML = `A quantidade de combustível necessária é ${combustivelNecessario.toFixed(2).replace('.',',')} litros. O custo total é R$ ${((combustivelNecessario * num3).toFixed(2).replace('.',','))}`
})