function setTime() {

    var txtTime = document.getElementById("txtTime");    
    FijarTiempo(txtTime.value);


}

function YaEsHora(segundos) {

    document.getElementById("resultado").textContent = "Segundos en este minuto: " + segundos;

}

