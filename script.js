const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}


function encriptar(encriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    encriptada = encriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(encriptada.includes(matrizCodigo[i][0])) {
            encriptada = encriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return encriptada;
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}


function desencriptar(desencriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    desencriptada = desencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(desencriptada.includes(matrizCodigo[i][1])) {
            desencriptada = desencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return desencriptada;
}
