function modificarMensaje() {
    const mensajeInicial = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    const mensajeModificado = ["Somos", "nosotros", "todos", "los", "estudiantes", "de", "programación", "los", "mejores", "del mundo"];
    let eliminados = [];
    let agregados = [];

    for (let i = 0; i < mensajeModificado.length; i++) {
        if (mensajeInicial[i] !== mensajeModificado[i]) {
            eliminados.push(mensajeInicial[i]);
            agregados.push(mensajeModificado[i]);
        }
    }

    alert("Mensaje inicial: " + mensajeInicial.join(" ") + "\n" +
        "Mensaje modificado: " + mensajeModificado.join(" ") + "\n" +
        "Eliminados: " + eliminados.join(", ") + "\n" +
        "Agregados: " + agregados.join(", "));
}

function operandoMetodos() {
    const arrInicial = Array(10).fill().map(() => Math.floor(Math.random() * 100));
    let arrFinal = [...arrInicial];
    const operaciones = [
        [() => arrFinal.push(Math.floor(Math.random() * 100))],
        [() => arrFinal.unshift(Math.floor(Math.random() * 100))],
        [() => arrFinal.shift()],
        [() => arrFinal.pop()]
    ];
    let eliminados = [];
    let agregados = [];
    let suma = 0;

    for (let operacion of operaciones) {
        operacion[0]();
        suma += arrFinal[arrFinal.length - 1];
        eliminados.push(arrFinal.shift());
        agregados.push(arrFinal.pop());
    }

    alert("Arreglo inicial: " + arrInicial.join(" ") + "\n" +
        "Arreglo final: " + arrFinal.join(" ") + "\n" +
        "Valores agregados: " + agregados.join(", ") + "\n" +
        "Suma de los elementos: " + suma);
}

