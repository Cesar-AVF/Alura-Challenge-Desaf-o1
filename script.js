
function encriptar(){
    var textoEncriptar = document.getElementById("inputtexto").value.toLowerCase();
    var textoEncriptado= textoEncriptar.replace(/e/igm, "enter");
    var textoEncriptado= textoEncriptado.replace(/o/ig, "ober");
    var textoEncriptado= textoEncriptado.replace(/i/ig, "imes");
    var textoEncriptado= textoEncriptado.replace(/a/ig, "ai");
    var textoEncriptado= textoEncriptado.replace(/u/ig, "ufat");
    
    document.getElementById("muñeco").style.display="none";
    document.getElementById("mensaje").style.display="none";
    document.getElementById("textarea").innerHTML = textoEncriptado;
    document.getElementById("textocopiar").style.display="show";
    document.getElementById("textocopiar").style.display="inherit";
}

function desencriptar(){
    var textoEncriptar = document.getElementById("inputtexto").value.toLowerCase();
    var textoEncriptado= textoEncriptar.replace(/enter/igm, "e");
    var textoEncriptado= textoEncriptado.replace(/ober/ig, "o");
    var textoEncriptado= textoEncriptado.replace(/imes/ig, "i");
    var textoEncriptado= textoEncriptado.replace(/ai/ig, "a");
    var textoEncriptado= textoEncriptado.replace(/ufat/ig, "u");
    
    document.getElementById("muñeco").style.display="none";
    document.getElementById("mensaje").style.display="none";
    document.getElementById("textarea").innerHTML = textoEncriptado;
    document.getElementById("textocopiar").style.display="show";
    document.getElementById("textocopiar").style.display="inherit";
}

function copy() {
    var copiando = document.querySelector("#textarea");
    copiando.select();
    document.execCommand("copy");
    alert("Texto copiado 😀😎");
    alert("Pega el texto para desencriptar");
    inputtexto.value = "";
    inputtexto.focus();

  }
