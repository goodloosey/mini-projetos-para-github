let corpo = document.body
let contadorDeCliques = 0
let botao = document.getElementById("modos")
let mudarModo = () => {
    contadorDeCliques += 1
    if (contadorDeCliques === 1) {
        corpo.style.backgroundColor = 'white'
        corpo.style.color = 'black'
        botao.innerText = 'escuro'
        
    }
    else if (contadorDeCliques === 2) {
        corpo.style.backgroundColor = 'black'
        corpo.style.color = 'white'
        botao.innerText = 'claro'
    }
    else {
        contadorDeCliques = 0
    }
}