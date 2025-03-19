// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const nombres = [];
        
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }
    
    nombres.push(nombre);
    actualizarLista();
    input.value = "";
    input.focus();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.innerText = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("ingresa al menos dos nombres para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let nombreSorteado = nombres[indiceAleatorio];
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    let li = document.createElement("li");
    li.innerText = "Tu amigo secreto es: " + nombreSorteado;
    resultadoLista.appendChild(li);
}