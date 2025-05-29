calcular = () => {
    let num1 = parseFloat(document.getElementById("numero1").value)
    let num2 = parseFloat(document.getElementById("numero2").value)

    if (document.getElementById("suma").checked) {
        operacion = "suma";
    } else if (document.getElementById("resta").checked) {
        operacion = "resta";
    } else if (document.getElementById("multiplicacion").checked) {
        operacion = "multiplicacion";
    } else if (document.getElementById("division").checked) {
        operacion = "division";
    } else {
        document.getElementById("resultado").textContent = "Por favor, seleccione una operación.";
        return;
    }

    let resultado;
    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Error: No se puede dividir por 0.";
            }
            break;
        default:
            resultado = "Operación no válida.";
    }

    // Mostrar el resultado
    document.getElementById("resultado").textContent = `El resultado es: ${resultado}`;
}