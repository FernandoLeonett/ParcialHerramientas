function mostrarMensajePorId(idElemento, mensaje) {
    document.getElementById(idElemento).innerText = mensaje;
}

function limpiarCampos() {

    let campos = document.querySelectorAll("input[type=text]");
    for (let i = 0; i < campos.length; i++) {
        let c = campos[i];
        c.value = '';
    }
}

function obtenerValorCampoPorId(pID){
  return  document.getElementById(pID).value;
}

function asignarEventoPorId(pId, evento){    
    document.getElementById(pId).addEventListener('click',evento)
}

function esNumero(_texto) {
    
  


    return (!isNaN(_texto) &&_texto.trim()!=='');
}


function insertarHtml(id, contenido) {
    
    document.getElementById(id).innerHTML = contenido;
}

function enlazarEventoPorClase(pClase, evento) {

    let botones = document.querySelectorAll('.' + pClase);


    for (let i = 0; i < botones.length; i++) {
        let boton = botones[i];
        boton.addEventListener('click', evento);

    }

}