


iniciarApp();
function iniciarApp(){
armarSelectorHerramientas();
asignarEventoPorId('btnRegistrarAlquiler',btnRegistrarAlquilerHandler);
asignarEventoPorId('btnCrearTabla',armarTablaHerramientas)


}




function btnRegistrarAlquilerHandler() {
    let idHerramienta = obtenerValorCampoPorId('slcIdHerramientas');
    let herramientaSeleccionada = buscarHerramientaPorId(Number(idHerramienta));
    let cedulaCliente = obtenerValorCampoPorId('txtCi');
    let cantHorasAlquilar = obtenerValorCampoPorId('txtHoras');
    let mensaje;
    if (herramientaSeleccionada.CantidadDisponible > cantHorasAlquilar && verificarCedula(cedulaCliente) && esNumero(cantHorasAlquilar) && cantHorasAlquilar > 0) {
        herramientaSeleccionada.CantidadDisponible -= Number(cantHorasAlquilar);
        let miAlquiler = new Alquiler(herramientaSeleccionada, cedulaCliente, Number(cantHorasAlquilar));
        mensaje ='Ingreso Exitoso'

        alquileres.push(miAlquiler);
    }else{
        mensaje ='verfique sus datos'
    }
    mostrarMensajePorId('msgRegistro',mensaje)

}


function armarTablaHerramientas() {
    let htmlTabla = '<table><thead><tr><th>ID Herramienta</th><th>Nombre Herramienta</th><th>Total Horas Herramienta</th><tr></thead><tbody>'
    for (let index = 0; index < herramientas.length; index++) {
        const a = herramientas[index];
        if (a.Potencia < 2000) {
            htmlTabla += `<tr><td>${a.Id}</th><th>${a.Nombre}</td><td>${totalHorasHerramientaPorId(a.Id)}</td></tr>`

        }
       

    }
    htmlTabla+='</tbody></table>'
    insertarHtml('divTabla',htmlTabla);
}

function totalHorasHerramientaPorId(pID) {

    let horasTotales = 0;
    for (let index = 0; index < alquileres.length; index++) {
        const a = alquileres[index];
        if (a.herramienta.Id === pID) {
            horasTotales += a.cantidadHorasAlquilar;
        }

    }
    return horasTotales;

}

function armarSelectorHerramientas() {
    let optionHtml = '';

    for (let index = 0; index < herramientas.length; index++) {
        let h = herramientas[index];
        if (h.CantidadDisponible > 0) {
            optionHtml += `<option value ="${h.Id}">${h.Nombre} Pontencia: ${h.Potencia}</option>`
        }
    }
    insertarHtml('slcIdHerramientas', optionHtml);
}

function buscarHerramientaPorId(pId) {
    let miheramienta = null;
    for (let index = 0; index < herramientas.length; index++) {
        const h = herramientas[index];
        if (h.Id === pId) {
            miheramienta = h;
            break;
        }
    }
    return miheramienta;
}

function verificarCedula(pCedula) {
    let esvalido = true;

    if (pCedula.length !== 11) {
        esvalido = false;
    } else {


        for (let index = 0; index < pCedula.length; index++) {
            const element = pCedula[index];
            if (index === 1 || index === 5) {
                if (element !== '.') {
                    esvalido = false;
                    break;
                }
            } else if (index === 9) {
                if (element !== '-') {
                    esvalido = false;
                    break;


                }
            } else if (isNaN(element)) {
                esvalido = false;
                break;
            }
        }
    }
    return esvalido;

}





