RECETA FORM TIPO MODEL

1) importamos libreria ReactiveFormsModule al app.module

2) creamos un atributo que se llama formGroup que contiene el nombre del formulario.

3)implementamos un evento ngSubmit que llame a una funcion pero que esta no recibe parametros. esta funcion genera un objeto del tipo json.

4)en cada uno de los inputs y textarea del formulario anadimos un atributo formControlName con el nombre del campo.

5)inicializo en el ts el objeto formGroup que daremos de alta cada uno de los campos. Aqui es donde ejecutamos los validadores.

##Estados del formulario



              - Pristine (limpio)   ------- Dirty(sucio)

              - Invalid (invalido) ------  valid(valido)

              - untouched (no tocado) ---- touched( tocado )

              - unsubmitted (sin enviar) --- submitted (enviado)