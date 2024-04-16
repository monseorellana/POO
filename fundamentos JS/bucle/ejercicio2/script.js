function sumaNumeros() {
    let count = 1;
    let suma = 0;
    let sumaStr = "";
    let array = [];

    while (count < 10) {
        suma += count;
        sumaStr += count + "+";
        array.push(suma);
        count++;
    }
    suma += count;
    sumaStr += count + "=" + suma;
    document.getElementById('lista').innerHTML = `${sumaStr}`
}