document.addEventListener('DOMContentLoaded', () => {
    // Eventos
    const enlace = document.querySelector('.enlace');
    enlace.addEventListener('click', (evento) => {
      console.log(evento);
      evento.preventDefault();
    });
  
    // Semaforo
    const semaforo = document.querySelector('.semaforo');
    semaforo.querySelector('.semaforo__boton').addEventListener('click', () => {
      /*
        if (semaforo.classList.contains("semaforo--avanza")) {
            semaforo.classList.remove("semaforo--avanza")
        } else {
            semaforo.classList.add("semaforo--avanza")
        }
        */
      semaforo.classList.toggle('semaforo--avanza');
    });
  
    // Listado de alumnos
    const alumnos = document.querySelector('.alumnos');
    const listadoalumnos = ['María', 'Rubén', 'Sergio'];
    const listado = alumnos.querySelector('.alumnos__listado');
    listadoalumnos.forEach((alumno) => {
      const li = document.createElement('li');
      li.innerText = alumno;
      listado.appendChild(li);
    });
  
    const formulario = alumnos.querySelector('.alumnos__formulario');
    formulario.addEventListener('submit', (evento) => {
      evento.preventDefault();
      const input = formulario.querySelector('#nombre-alumno');
      const nombre = input.value;
      const li = document.createElement('li');
      li.innerText = nombre;
      listado.appendChild(li);
    });
  });

  // temporisador/ intervalos
  // para hacer una temporisador
  // et kui pangas, paned 10 min ei ole tegevust logib v2lja
  setTimeout(() => {
    console.log('ringggg');

  }, 3000); //siempre millisegundos 3 segundos

  // intervalo que una function repite periodicamente
  setInterval(() => {
    console.log('cada 5s egund');
  }, 5000);