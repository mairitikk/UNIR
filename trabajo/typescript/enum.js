// que menos vais usar
//ibrido de un array y json
var Talla;
(function (Talla) {
    Talla[Talla["sm"] = 0] = "sm";
    Talla[Talla["m"] = 1] = "m";
    Talla[Talla["l"] = 2] = "l";
    Talla[Talla["xl"] = 3] = "xl";
    Talla[Talla["xxl"] = 4] = "xxl";
})(Talla || (Talla = {}));
console.log(Talla);
//consepto de posision y valor
console.log(Talla['0']); //sm
console.log(Talla.xl); //3
