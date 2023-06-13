const fecha = new Date();

function Getvalues(texto) {

    console.log(texto);

    if (texto == undefined || texto == null || texto == "") {

        texto = "---";

    }

    var stringfecha = GetDate();
    console.log(stringfecha);

    var myemoji  = GetData();

    var data = {

        emoji : myemoji,
        myfecha : stringfecha,
        text : texto

    }

    return data;

}


function GetDate() {

    const fechaactual = fecha.toLocaleTimeString();
    return fechaactual;

}
