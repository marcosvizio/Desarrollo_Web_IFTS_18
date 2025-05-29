let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
document.open();
document.write("<h1>Ejercicio 2</h1>");
for (let i = 0; i < diasSemana.length; i++) {
    document.write("<p>" + diasSemana[i] + " " + (i+1) + "</p>");
}
document.close();   