//typescript indroduse el consepto de interfaz es un contrato vinculante
// que obliga al programador a cumplir lo  que dice que va tener la clase
interface IPersona {
    age:number;
    saludar(): string;
}
class Persona implements IPersona {
    //propiedades fuera de consrutcion
    //public private prtected
     age: number = 0;
    private name: string = "";
    protected height: number = 0;
    weight: number = 0;
    status: boolean = true;

    constructor(age: number, name: string, height: number, weight:number = 70){
        this.age = age;
        this.name = name;
        this.height = height;
        this.weight = weight;

    }
    //getters y setters
getName(): string {
    return this.name;
}
setName(name:string) :void{
    this.name = name;
}
saludar(): string{
    return `Hola me llamo ${this.name}`;
}
}

const maria = new Persona(23, 'pedro', 170, 60);
maria.setName('Pepe');
console.log(maria.getName());
console.log(maria.status);
