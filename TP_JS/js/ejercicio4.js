let textoIngresado = prompt("Ingresa una oración en mayuscula o minuscula o con ambas.");

function textoAnalisis (texto) {
    if (texto === texto.toUpperCase()) {
        alert("Tu texto contiene solo mayusculas");
    } else if (texto === texto.toLowerCase()) {
        alert("Tu texto contiene solo minusculas");
    } else {
        alert("Tu texto contiene mayusculas y minusculas");
    }
}

textoAnalisis(textoIngresado);