console.log("vinculado correctamente")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function calcularEdad() {

    // Tu código aquí
    let ahora = 2024;
    let fecha_nac = 2006;
    let resultado = ahora-fecha_nac;
    alert(`mi edad es:  ${resultado}`);
    }
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'VAR1' a 'Var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    let   var1 = 1111;
    let   var2 = var1;
    alert(`el valor de var2 es:  ${var2}`)
    // Tu código aquí

    }
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'sum1' y 'sum2' y 'sum3' , resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
    let num1 = 35;
    let num2 = 25;
    let num3 = 12;
    let suma = num1 + num2 + num3;
    let resta = num1 - num3;
    let multi = num2 * num3;
    let divi  = num1 / 120;

    alert(`la suma es  ${suma} \n la resta es  ${resta} + \n la multi es  ${multi} \n la division es  ${divi}` );

}
    // Tu código aquí
    
    
    // Tu código aquí
    

    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el primer carácter en el mensaje.
    function manipularCadenas(){
        let direccion = "cerro navia";
        let n_casa= "8831";
        let mensaje = "mi direccion es : " + direccion + "y el numero de mi casa " + n_casa;
        alert(`la longitud del mensaje es: ${mensaje.length} \nCaracter antepenultimo: ${mensaje[mensaje.length - 3]}`);
    // Tu código aquí
            
    }