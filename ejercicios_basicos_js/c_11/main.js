function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        console.log("La cadena está formada solo por MAYÚSCULAS.");
    } else if (cadena === cadena.toLowerCase()) {
        console.log("La cadena está formada solo por minúsculas.");
    } else {
        console.log("La cadena tiene una mezcla de mayúsculas y minúsculas.");
    }
}
