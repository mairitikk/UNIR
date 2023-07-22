INPUT como crear una input para pasar information del padre al hijo
app-component -> number List

Pasao 1: La etiqueta personalisada o selector del componente hijo <app-number-list> tengo que cargar una propiedad de html con el nobre que yo quiera y tentro de esa propiedad le paso el valor que quiero introducor dentre del componenre

Paso 2: En el coponente hijo/ destino dentri del ts de dicho componnte debo crear ina propiedad de clases con el mismo tipo de dato que voy a recibir pero decorada @Input, esto indica que es una propiedad de entrada de datos u estara disponoble cuando carque el coponente, ngOnInit()

## Output para como crear una output para comunicar datos del hijo al padre. Evento personalizado que comunica informacion que tiene el hojo al padre

1.paso crear una propeadad peronalizada dentro del ts del hojo decorda por la function @Output(). Ese finction crea un evento personalizada de tipo EventEmitter
2.paso Inicilizamos esta propiedad como new EventEmitter() dentro del constructor;
3.paso Recojo el valor que quiere enviar y lo emito al padre a traves del evento emit del Output.
4.paso En la etiqueta del componente hijo (<app-form>) creo un evento (), llamado exactamente igual que el valor el output y que ejecute una funcion dentro del padre que recibe como parametro un $evento, $event tendra como tipo de dato el valor que le hallamos pasado del hijo.
5. paso creo el function detro del ts y recojo el valor de $event