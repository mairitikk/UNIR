class Persona {
    constructor(altura, peso, ojos){
        this.altura = altura;
        this.peso = peso;
        this.ojos =ojos;
        this.estado = true;
    }
    pesarse(){
        return `Tu peso es ${this.peso}`;
    }
}
const pepe= new Persona(180, 100, 'azul');
const maria = new Persona(170, 60, 'marrones');
console.log(maria.pesarse())