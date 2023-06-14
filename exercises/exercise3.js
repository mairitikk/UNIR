class Coche {
    constructor(color) {
        console.log("me he consruido")
        this.color = color
        this.encendido = false
        this.velocidad = 0
    }
    matricular(matricula){
        this.matricula = matricula
    }
    arrancar() {
        this.encendido = true
    }
    detener() {
        this.encendido = false
    }
    acelerar(){
        if (this.encendido){
            this.velocidad++
        }
    }
    frenar() {
        if (this.encendido && this.velocidad > 1) {
            this.velocidad--
        }
    }
    itv() {
        if(this.velocidad > 0) {
            console.log("no puedes pasar la itv con el coche en moviminento")
        }
        else if (this.encendido){
            console.log("apage el coche")
        }
        else{
            console.log("Color, this.color");
            console.log("Matricula", this.matricula);
        }
    }
}
const coche = new Coche("amarillo")
//console.log(coche.color)
//const otrocoche = new Coche ("rojo")
//console.log(otrocoche.color)
//console.log(coche.matricula)
coche.matricular("123nosdf");
//console.log(coche.matricula)
coche.arrancar();
coche.encendido
coche.detener();
coche.encendido = true