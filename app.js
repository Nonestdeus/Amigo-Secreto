// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var array_nombres = []
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if(nombre != ""){
        array_nombres.push(nombre)
        actualizarListaAmigos()
        document.getElementById("amigo").value = "";
    }

}

function actualizarListaAmigos(){
    document.getElementById("listaAmigos").innerHTML = ""

    for(i = 0; i < array_nombres.length; i++){
        document.getElementById("listaAmigos").innerHTML += "<li>" + array_nombres[i] +"<\li>";

    }

}

function sortearAmigo(){
    if (array_nombres.length != 0) {
        const indiceAleatorio = Math.floor(Math.random() * array_nombres.length);
        document.getElementById("listaAmigos").innerHTML = "";

        document.getElementById("resultado").innerHTML = "El ganador es " + array_nombres[indiceAleatorio];
        array_nombres = []
    }
    
}