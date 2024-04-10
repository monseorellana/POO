function identificarMayorEdad() {
    let resultado = "";
    //identificar si es mayor o menor de edad 
    let edad = prompt("por favor ingrese su edad: ");
    if (edad >= 18) {
        resultado = `es mayor de edad - tiene : <h2>${edad}</h2>`

    } else {
        resultado = `es menor de edad - tiene: <h2>${edad}</h2>`
    }
    document.getElementById('lista').innerHTML = resultado;

}