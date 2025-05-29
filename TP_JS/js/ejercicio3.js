let numeroIngresado = parseInt(prompt("Ingrese un número"));

function numeroPar (numero){
    let numeroResultado = numero % 2;
    if (numeroResultado === 0) {
        alert(`El numero ${numero} es par, siendo ${numero} el numero ingresado.`);
    } else {
        alert(`El numero ${numero} es impar, siendo ${numero} el numero ingresado.`);
    }
}

numeroPar(numeroIngresado);