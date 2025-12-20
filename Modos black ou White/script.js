let corpo = document.body
let modo_num = 0
function mudarModo(){
    modo_num += 1
    if (modo_num === 1){
        corpo.style.backgroundColor = "black"
        corpo.style.color = "white"
    }else if (modo_num === 2){
        corpo.style.backgroundColor = "white"
        corpo.style.color = "black"   
    }else if (modo_num > 2){
        modo_num = 1
        if (modo_num === 2){
            corpo.style.backgroundColor = "white"
            corpo.style.color = "black"
        }else{
            corpo.style.backgroundColor = "black"
            corpo.style.color = "white"
        }
    }
}