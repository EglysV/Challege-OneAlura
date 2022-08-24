const texto = document.querySelector(".texto")
const mensaje = document.querySelector(".msn")


function botonEncriptar(){
    const textEncriptado = encriptar(texto.value)
    mensaje.value = textEncriptado;
    mensaje.style.backgroundImage = "none"
    texto.value = "";
}


function encriptar(stringEncriptada){
    
    let matrizCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; 
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

        }

    }
    return stringEncriptada;
}

function botonDesencriptar(){
    const textDesencriptado = desencriptar(texto.value)
    mensaje.value = textDesencriptado;    
    texto.value = "";
}


function desencriptar(stringDesencriptada){
    
    let matrizCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; 
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);

        }

    }
    return stringDesencriptada;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert ("Copiado con éxito")
}







