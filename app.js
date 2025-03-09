let Amigos = []; // Lista de amigos
let listaAmigos = document.getElementById("listaAmigos"); // Elemento de la lista
let Resultado = document.getElementById("resultado"); // Elemento de resultados

// Función para agregar un amigo
function agregarAmigo() {
    let nombreDeAmigos = document.getElementById('amigo').value;
    if (nombreDeAmigos.trim().length === 0) {
        alert('Por favor, inserte un nombre.');
    } else {
        Amigos.push(nombreDeAmigos); 
        mostrarListaAmigo(); 
    }
    limpiarCaja(); 
}

// Función para mostrar la lista de amigos
function mostrarListaAmigo() {
    listaAmigos.innerHTML = ""; 
    for (let index = 0; index < Amigos.length; index++) {
        const element = Amigos[index];

        let listaHTML = document.createElement("li"); 
        listaHTML.textContent = element; 
        listaAmigos.appendChild(listaHTML); 
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (Amigos.length >= 1) {
        let numero = Math.floor(Math.random() * Amigos.length);
        Resultado.innerHTML = `El amigo sorteado es: ${Amigos[numero]}`;
    } else {
        Resultado.innerHTML = 'No hay amigos para sortear.';
    }
}

// Limpiar el campo de entrada
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//finalizado
