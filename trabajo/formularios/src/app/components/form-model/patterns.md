/*

    ## / -  Indica inicio de expresión string

    ##   \S - Indica que se espera un caracter diferente a un espacio en blanco

    ##   \s  indica un espacio en blanco

    ##   + -  Indica que de ese caracter debe existir una ó más veces

    ##   \@     - Indica el caracter en sí a buscar: una arroba

    ##   \.-  Indica un caracter: un punto

    ##  / - Indica el final de la expresión regular

*/

/*

    / - Indica inicio de expresión string

    ^ - Indica que la expresión regular se aplica a la totalidad del string

    \d - Indica que se espera un caracter de dígito

    { 10 } -  Indica que de ese caracter debe haber un patrón de repetición: diez caracteres

    [A - Z][0 - 9] - Indica que se espera un rango de caracteres en mayúscula, entre la A y la Z o indica que espera cualquier numero del 0 al 9

    { 1, 2 } -  Indica que de ese caracter debe haber un patrón de repetición: entre 1 y 2 caracteres

   [gmail, hotmail] indica que ese conjunto de caracteres tiene dos posibilidades y se escribe tal cual

    / - Indica el final de la expresión regular

*/

console.log(exp2.test(dni));





/**

 *  https://cheatography.com/davechild/cheat-sheets/regular-expressions/

 * https://www.linkedin.com/pulse/vitamina-tus-scripts-con-expresiones-regulares-mario-gir%C3%B3n-mart%C3%ADn/?trk=articles_directory&originalSubdomain=es

 *  regexlib.com ----parim leht

 * https://ihateregex.io

 *   https://regex101.com/library

 */

JUAN ANTONIO PEREZ JARILLO
43:54
/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/