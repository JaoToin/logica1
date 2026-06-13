//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    var num1 = parseFloat(form_num.get('num1'))
    
    if(num1 % 3 === 0 && num1 % 7 === 0){
        divResultado.innerHTML = `o numero ${num1} é divisivel por 3 e 7`
    } else {
        divResultado.innerHTML = `o numero ${num1} não é divisivel`
    }

})