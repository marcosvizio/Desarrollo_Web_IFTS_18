let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");

mostrarNombreApellido = (nombre,apellido) => {
    let apellidoNew = apellido.toUpperCase();
    let nombreNew = nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();
    alert(`${apellidoNew}, ${nombreNew}`);
}

mostrarNombreApellido(nombre,apellido);