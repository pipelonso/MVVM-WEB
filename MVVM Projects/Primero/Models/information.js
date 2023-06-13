function GetData() {

    const listaEmojis = ["😀","😁","😧","🤖","🐔","🐀","🐨","🐛","☠"];

    var numeroAleatorio = Math.floor(Math.random() * listaEmojis.length);

    return listaEmojis[numeroAleatorio];

}