//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)
    const nome = form_num.get("num1")
    const compra = parseFloat(form_num.get("num2"))

    let venda;
    
    if(compra < 10 ){
        venda = compra * 0.7;
    } else if (compra <= 30 ) {
        venda = compra * 0.5;
    } else if ( compra <= 50 ) {
        venda = compra * 0.4
    } else {
        venda = compra * 0.3
    }

    divResultado.innerHTML = `<p>PRODUTO: ${nome}</p><p> VALOR DA VENDA: R$ ${venda.toFixed(2)}</p>`;

})