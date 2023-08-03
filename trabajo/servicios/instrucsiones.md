- ¿Cuantos componentes necesito ? 3 componentes
           - listaAlumnos
           - form
           - alumnoCard

  - ¿Cuantos interfaces necesitamos ? 1 interface

          - alumno
                - id: number
                - nombre: string
                - edad: number
                - curso: string
                - email: string
-crear un fichero alumnos.db.ts en una carpeta db donde tendremos algunos alumnos

-crear un servicio qie questione los datos, es decir tenga acceso  a ellos y diga lo que se puede con hacer ellos
- un servicio se crea en plural para diferenciarlos de los interfases

    # ng generate service services/alumnos --skip-tests