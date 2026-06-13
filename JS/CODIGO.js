//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    var codigo = form_num.get('codigo')
    var senha = form_num.get('senha')

    if (codigo === 'ABCD1234' && senha === '1234' ){
        divResultado.innerHTML = 'acesso permitido'
    } else{
        divResultado.innerHTML = 'acesso negado'
    }

})