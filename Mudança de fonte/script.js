let corpo = document.body
let fonte = 20
corpo.style.fontSize = `${fonte}px`
function maisFonte(){
    fonte += 5
    corpo.style.fontSize = `${fonte}px`
}
function menosFonte(){
    fonte -= 5
    corpo.style.fontSize = `${fonte}px`
}
function reiniciarFonte(){
    fonte = 20
    corpo.style.fontSize = `${fonte}px`
}