# Dori

### Planteamiento:
Dori App es una aplicación que está dirigida a todo tipo de usuario. Este proyecto está enfocado en películas y series. Esta aplicación te permite guardar en tu tablero películas o serie que te han recomendado  para no olvidarte de ellas, en caso de que no te hayan recomendado puedes buscarlas  por calificación, genero,  en caso de las series duración de capítulos etc. Te permite ver información acerca de la película o serie (Poster, titulo, años, duración, genero y reseña ).




## Sección de prototipado:

### **Baja fidelidad**


### **Alta fidelidad**


https://www.figma.com/proto/YBsi56f5hhmWI5af9IvEqB77/Hackathon-Pel%C3%ADculas?node-id=1%3A2&scaling=scale-down

## Historias de usuario:

 1. El usuario tiene que ingresar su usuario y contraseña para iniciar sesión.
      -Dos input y un botón para ingresar
      -Nombre de la app
      -Logo tipo
      -Un archivo index.html que es el primero que va a leer github.

 2. Tienes que existir el botón (hamburguesa) para que el usuario pueda  desplegar el menú al tocar o dar click.  
      -Home
      -Mis tableros
      -Crear tablero
      -Ayuda
      -Cerrar sesión.

3. El usuario necesita buscar una película/serie en el buscador principal. Después mostrará el resultado en una card.  
      -Template de la Película: Imagen, Título, Año, Rating, Género, Reseña,      	Duración
      -Card de Búsqueda rápida: Imagen, Título, Rating, Género y botón de agregar al tablero.

  4. El usuario necesita ver a detalle, mediante un template información más detallada y específica de la película/serie elegida y tener la opción de agregar a su tablero     
      -Imagen debe de abarcar la mitad de la pantalla, degradado de la parte inferior a superior
      -Título de la serie/peli de una fuente grande y legible
      -Año, Rating, Género, Reseña, Duración,
      -Ícono de play para que te lleve al trailer.

5. Tablero con mis pelis/series que ya he guardado anteriormente


##  Quien utiliza Dori App:

Hombres y mujeres mayores de 12  años que quieran recordar las películas o series recomendadas o simplemente que quieran buscar películas y no olvidar que película le intereso.

## Especificaciones técnicas:

La aplicación utiliza una API de OMDB (The Open Movie Database), se toma los primero 50 de un trapping top, para filtrar y ordenar películas y series a través de lo seleccione el usuario y así visualizar la información y permitirles agregarlas (guardarlas) a su tablero.


## Pasos para hacer uso de la aplicación:

1.  El usuario de la aplicación necesita crear una cuenta para ingresar (Usuario y contraseña).
2.  Al ingresar a la aplicación se mostrará la barra de búsqueda y debajo  los distintos filtros y ordenado (sugerencias) en forma de carrusel .  El usuario tendrá oportunidad de seleccionar la película y serie para ver mas información
3.  Una vez seleccionada las película o seria según sea el caso se mostrará una nueva pantalla donde aparezca la interfaz con mas información de la película/serie. Aquí también tendrás la opción de agregar a tus tableros.
4.  El usuario puede navegar a través de la aplicación con el menú lateral para regresar al inicio, mis tableros, crear tablero, ayuda o cerrar sesión.

##  Métodos de filtrado

La aplicación contará con distintos filtros para buscar  las películas/series tales como;

 - Búsqueda por nombre
 - Mejor calificación
 - Año
 - Duración de capitulo (en el caso de las series)
 - Genero.
