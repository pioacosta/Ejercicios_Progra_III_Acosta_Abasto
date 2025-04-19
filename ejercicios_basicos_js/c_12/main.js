function esPalindromo(cadena) {
    let cadenaLimpia = cadena.toLowerCase().replace(/[\s]/g, '');

    let cadenaInvertida = cadenaLimpia.split('').reverse().join('');

    if (cadenaLimpia === cadenaInvertida) {
        console.log("La cadena ES un palíndromo.");
    } else {
        console.log("La cadena NO es un palíndromo.");
    }
}
