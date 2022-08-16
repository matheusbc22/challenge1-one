//Botões
const btnCriptografar = document.getElementById("btnCriptografar");
const btnDescriptografar = document.getElementById("btnDescriptografar");
const btnCopiar = document.getElementById("btnCopiar");
//Input
const inputTexto = document.getElementById("input");
//Output
const emptyText = document.getElementById("empty");
const outputTexto = document.getElementById("outputTexto");

//Verifica se é válido e criptografa
function criptografarTexto(){
    if (verificarString(inputTexto.value)){
        emptyText.style.display = "none";
        outputTexto.style.display = "flex";
        btnCopiar.style.display = "flex";
        let string = inputTexto.value;
        outputTexto.value = string.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    }
}
//Verifica se é válido e descriptografa
function descriptografarTexto(){
    if (verificarString(inputTexto.value)){
        emptyText.style.display = "none";
        outputTexto.style.display = "flex";
        btnCopiar.style.display = "flex";
        let string = inputTexto.value;
        outputTexto.value = string.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    }
}
//Verifica string
function verificarString(string){
    let pattern = /[a-z ]+/;

    if (string.length > 0){
        for (let i = 0; i < string.length; i++){
            if (!string[i].match(pattern)){
                return false;
            }
        }
        return true;
    }
}
//Copia o output
function copiarTexto(){
    outputTexto.select();
    document.execCommand("Copy");
}
btnCriptografar.onclick = criptografarTexto;
btnDescriptografar.onclick = descriptografarTexto;
btnCopiar.onclick = copiarTexto;