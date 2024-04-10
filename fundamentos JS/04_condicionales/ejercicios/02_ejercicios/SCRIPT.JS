function identificarTemperatura() {
    let resultado = "";
    //identificar temperatura
    let temperatura = parseInt(prompt("por favor ingrese la temperatura actual: "));

    if (temperatura >= 25) {
        resultado = "hace calor"
    } else if (temperatura < 0) {
        resultado = "hace frio"
    } else if (temperatura <= 25) {
        resultado = "la temperatura es agradable"
    }


    document.getElementById('lista').innerHTML = resultado
}