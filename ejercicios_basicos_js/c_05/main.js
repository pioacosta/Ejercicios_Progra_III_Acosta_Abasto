function repetirPalabra(numero, palabra) {
    if (palabra !== undefined) {
      for (let i = 0; i < numero; i++) {
        console.log(palabra);
      }
    } else {
      console.log(numero.toString().split('').reverse().join(''));
    }
  }
  