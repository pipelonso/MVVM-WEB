function VerificarTiempo() {

    var fechaactual = new Date();
    var horaactual = fechaactual.getHours();
    var minutosActuales = fechaactual.getMinutes();    

    if (minutosActuales <= 9) {

        minutosActuales = "0" + minutosActuales;

    }

    var horaactualfinal = horaactual + ":" + minutosActuales;

    if (tiempogeneral == horaactualfinal) {

        EsHora(fechaactual.getSeconds());
        
    } 


}

setInterval(VerificarTiempo, 1000);
