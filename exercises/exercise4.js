class Coche {
    #matricula
    #precio
    constructor(precio) {
        this.#precio = precio
    }
    matricular(matricula){
        if (typeof this.#matricula !== "undefined") {
            console.log("no puedes matricular un coche mas de una ves!")

        }else {
            this.#matricula = matricula
        }
    }
    getPrecio() {
        return this.#precio
    }
    getMatricula() {
        return this.#matricula
    }
}
    class Parking {
        #name
        #coches
        constructor(name) {
            this.#name = name
            this.#coches = []
        }
        aparcar(coche) {
        this.#coches.push(coche)
    }
    buscarCoche(matricula) {
       // this.#coches.forEach(coche => {
         //   console.log(coche.getMatricula())
        //})

        return this.#coches.find(coche =>
            coche.getMatricula() === matricula)
    }
    inspeccionPolicia(){
        return this.#coches.map(coche => 
            coche.getMatricula())
            
    }
    totalAsegurar() {
        return this.#coches.reduce((acc, coche) =>{
            return acc + coche.getPrecio()
        } ,0)
    }
    }
const parking = new Parking("Parking Mairi")

const cochede1000euros = new Coche(500)
cochede1000euros.matricular("554")

const cochecaro = new Coche (10000);
cochecaro.matricular("222")


const cochecarisiomo = new Coche(50000);
cochecarisiomo.matricular("426")

const auto = new Coche (20000);
auto.matricular("122")

parking.aparcar(cochede1000euros)
parking.aparcar(cochecaro)
parking.aparcar(cochecarisiomo)
parking.aparcar(auto)

parking.buscarCoche("111")
console.log(parking.buscarCoche("111"))
console.log(parking.buscarCoche("122").getPrecio())

console.log(parking.inspeccionPolicia())
console.log(parking.totalAsegurar())
