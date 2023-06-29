let edad = 41;
let altura:number = 160;
let altura2:number = 1;
console.log(altura, edad);
let nombre: string = 'Mairi';
let a : string | number = 10;
const estado: boolean = true;
// typescript array, dos formas

//opcion 1
const arrNum : number[] = [1,2,3];
//opcion 2
const arrNames: Array<string> = ['Mairi', 'Mariin', 'Maia'];

// dos tipos
const arrCosas : Array<string | number> = [ 1, 2, 'Mairi'];
// array vacio kuus elementi tyhja
let arrayVacio1: number[]= new Array(6);
const arrayVacio :number [] = [];

//array de arrays
let zoo: Array<number[]> = [[1,2,3,4,]];

// tipado de funciones
// funciones declarativas
// funciones expresiva -anonimas
// funciones fleca arrow // void no devulve esse function nada
function sumar(numero1: number, numero2: number): void{
    console.log(numero1 +numero2);
}
sumar(5,4)

function restar(numero1: number, numero2: number){
   
    let resultado = numero1 - numero2;
   return 'el resultado es'+ resultado;
}

const multiplicacion = function(numero1: number, numero2: number): number{
    return numero1*numero2;
}
// funcion flecaconst 
const miMultiplication = (numero1: number, numero2: number): number => numero1*numero2;

let valor: any = 1; // true // string // kui ei tea mis tyypi on variable
