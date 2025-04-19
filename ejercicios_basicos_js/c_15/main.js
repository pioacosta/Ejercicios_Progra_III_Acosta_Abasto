// Tuve que buscar ayuda para obtener factores primos porque me explotó la cabeza

function obtenerFactoresPrimos(num) {
    let factores = [];
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        while (num % i === 0) {
            factores.push(i);
            num /= i;
        }
    }
    
    if (num > 1) {
        factores.push(num);
    }
    
    return factores;
}

function sumarDigitos(numeros) {
    return numeros
        .toString()
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);
}

function esNumeroSmith(num) {
    let sumaNumeros = sumarDigitos(num);
    let factores = obtenerFactoresPrimos(num);
    
    let sumaFactores = factores.map(factor => sumarDigitos(factor)).reduce((a, b) => a + b, 0);
    
    return sumaNumeros === sumaFactores;
}
