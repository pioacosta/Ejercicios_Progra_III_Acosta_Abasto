let nombre = "Pio";
let apellido = "Acosta";

function mostrarNombreApellido(nombre, apellido) {
    let apellidoMayusculas = apellido.toUpperCase();
    let nombreCorrecto = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    console.log(apellidoMayusculas + ", " + nombreCorrecto);
}