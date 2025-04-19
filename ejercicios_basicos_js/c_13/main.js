function obtenerSumaMaxima(arr) {
    let maxSuma = 0;
    let sumaActual = 0;

    for (let numero of arr) {
        sumaActual += numero;
        if (sumaActual > maxSuma) {
            maxSuma = sumaActual;
        }
        if (sumaActual < 0) {
            sumaActual = 0;
        }
    }

    return maxSuma;
}
