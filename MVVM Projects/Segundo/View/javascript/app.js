function addTask (){

var txtTarea =  document.getElementById("txtTarea");
var txtTiempo =  document.getElementById("txtTiempo");

var lblNota = document.getElementById("lblNota");
var lblTiempo = document.getElementById("lblTiempo");

console.log(txtTiempo.value);

lblNota.textContent = txtTarea.value;
lblTiempo.textContent = txtTiempo.value;

setTime(txtTiempo.value);


}

function isCurrentTime(segundos) {

    document.getElementById("lblresultado").textContent = "Completado: Segundos: " + segundos ;


}
