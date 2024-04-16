function numMayor() {
    let arrayNum = [];
    let numeroMayor = 0;
    for (let i = 0; i < 5; i++) {
        let num = parseInt(prompt("ingrese un numero para determinar mayor : "));
        arrayNum.push(num);
        numeroMayor = (numeroMayor < num) ? num : numeroMayor;
    }
    document.getElementById("lista").innerHTML = `de los numeros ingresados:${arrayNum.join(",")} numero mayor: <h1>${numeroMayor}</h1>`
}