var Persona = /** @class */ (function () {
    function Persona(age, name, height, weight) {
        if (weight === void 0) { weight = 70; }
        //propiedades fuera de consrutcion
        //public private prtected
        this.age = 0;
        this.name = "";
        this.height = 0;
        this.weight = 0;
        this.status = true;
        this.age = age;
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
    //getters y setters
    Persona.prototype.getName = function () {
        return this.name;
    };
    Persona.prototype.setName = function (name) {
        this.name = name;
    };
    Persona.prototype.saludar = function () {
        return "Hola me llamo ".concat(this.name);
    };
    return Persona;
}());
var maria = new Persona(23, 'pedro', 170, 60);
maria.setName('Pepe');
console.log(maria.getName());
console.log(maria.status);
