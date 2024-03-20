//ejercicios creacion de variables

//Una variable global de tipo 
var global = "Global";
//variable local
let local = "Local";
//constante
const constante = "Constante";

console.log ("variables : Global: " + global + " Local: "
            + local + " - Constante: " + constante);

//variable de tipo decimal
var numdecimal = 2.4;
//variable cadena de texto
var cadtexto = "holaa mm";
//variable booleano 
var booleano ="true"; 
let arreglo =[ 2 , 5, 7, 34]; 
//variable objeto
var objeto  ={nombre: "monse", edad: "17"};
//variable indefinida
var indefinida= "";
//variable nulo
var nulo = null;
// definicion de funcion
function restar(){
    return 20 - 5;
};
console.log("variables: \nnumero decimal: " +  numdecimal + " \ncadena de texto: " + cadtexto + 
" \nbooleano: " + booleano + "\narreglo: "  +arreglo + "\nobjeto" + JSON.stringify(objeto) +  " \nindefinida " + indefinida   + "\nnulo " + nulo + "\nresultadofuncion: " + restar());   