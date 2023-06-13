function addAlement() {    

    var txtNota = document.getElementById("txtNota");
    var elemento = Getvalues(txtNota.value);

    var PadreLista = document.getElementById("Bloquelista");

    var nuevoli = document.createElement("li");

    var emojili = document.createElement("p");
    emojili.textContent = elemento.emoji;

    var tareaLi = document.createElement("p");
    tareaLi.textContent = elemento.text;

    var fechali = document.createElement("p");
    fechali.textContent = elemento.myfecha;

    nuevoli.appendChild(emojili);
    nuevoli.appendChild(tareaLi);
    nuevoli.appendChild(fechali);

    PadreLista.appendChild(nuevoli);

    console.log(elemento);

}