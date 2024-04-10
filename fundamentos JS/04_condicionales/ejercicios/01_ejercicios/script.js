function identificarMayorEdad() {
    let resultado = "";
    //identificar si es mayor o menor de edad 
    let num1 = prompt("por favor ingrese el primer numero: ");
    let num2 = prompt("por favor ingrese el segundo numero: ");
    if (num1 > num2) {
        resultado = `el numero : <h2>${num1}</h2> es mayor`

    } else if (num2 > num1) {
        resultado = `el numero: <h2>${num2}</h2> es mayor`
    } else if (num1 = num2) {
        resultado = `los numeros son iguales`

    }
    document.getElementById('lista').innerHTML = resultado;

}