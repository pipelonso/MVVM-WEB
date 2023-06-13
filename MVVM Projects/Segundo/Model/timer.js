var istiempo;

function verificarHoraEspecifica() {
    
    var horaActual = new Date();
  
    var horastiempo = horaActual.getHours();
    var minutosTiempo = horaActual.getMinutes();

    if (minutosTiempo <= 9) {

        minutosTiempo = "0" + minutosTiempo;

    }

    var horaactualfinal = horastiempo + ":" + minutosTiempo;


    var horaObjetivo = istiempo; 
    


    if (horaactualfinal == horaObjetivo) {
      
      isTime(horaActual.getSeconds());
      
    }
  }
  
  // Ejecutar la función cada segundo
  setInterval(verificarHoraEspecifica, 1000);