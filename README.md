**Pop N' Save** 
![enter image description here](https://lh3.googleusercontent.com/nZdnTOp9lOuG6IKnUWyyvN2iopvHnjE5abUtk09fVHknZk5zwek1QPKy-rOt0DjrPW0iFqHTndGLTw)
Es una App dirigida a usuarios que se enfrentan a la problemática de no poder recordar una película o serie recomendada.

 **Versión 1.0** 
 Esta disponible en idioma Inglés.
 
 Te permite:
 - Crear una cuenta en la app con la cual podrás ingresar las veces que sean necesarias.
Buscar películas/series deseadas.
 - Ver información y un trailer de la película/serie consultada.
 - Crear tableros personalizados.
 - Agregar y guardar contenido.
 - Visualizar los tableros existentes.
 
 **Version 2.0**
 -  Estará disponible en otros idiomas.
 - Podrás compartir tus tableros con otros usuarios.
 - Te recordará con push notifications en tu dispositivos móviles el o los elementos guardados.

 **Sección de prototipado**
 Luego de definir a nuestros usuarios se procedió a realizar el *prototipado de baja fidelidad,* se solicitaron opiniones del mismo obteniendo el siguiente resultado:
 ![enter image description here](https://lh3.googleusercontent.com/iqFyxiRHLraFOAat3x6wtLbhHVILmbnZO2_4ZKFo9bfTl9C4j3IrPhVw4l1rhCLpicCh7v67u88kOw)
 

El siguiente paso fue enfocarnos en un *prototipo de alta fidelidad.* Se utilizó como software de diseño Figma. 
![enter image description here](https://lh3.googleusercontent.com/pY9VduY-RRf2SKScoC8P3udlnOt5tP8SizQpBq7lTpIOXV7xTCLnGWvrWTcVyaMOKFjiDsldsdhLgg)

[Da click aquí para poder interactuar con el prototipo de alta fidelidad.](https://www.figma.com/proto/YBsi56f5hhmWI5af9IvEqB77/Hackathon-Pel%C3%ADculas?node-id=1:2&scaling=scale-down)


**Historias de usuario.**

 1. El usuario tiene que ingresar su usuario y contraseña para iniciar sesión. 
 - Dos input y un botón para ingresar 
 - Nombre de la app 
 - Logo tipo 
 - Un archivo index.html que es el primero que va a leer github.

 
 2. Tienes que existir el botón (hamburguesa) para que el usuario pueda desplegar el menú al tocar o dar click.  
 - Home 
 - Mis tableros 
 - Crear tablero 
 - Ayuda 
 - Cerrar sesión.


3. El usuario necesita buscar una película/serie en el buscador principal. Después mostrará el resultado en una card.  
 - Template de la Película: Imagen, Título, Año, Rating, Género, Reseña, Duración 
 - Card de Búsqueda rápida: Imagen, Título, Rating, Género y botón de agregar al tablero.

4. El usuario necesita ver a detalle, mediante un template información más detallada y específica de la película/serie elegida y tener la opción de agregar a su tablero  

 - Imagen debe de abarcar la mitad de la pantalla, degradado de la parte inferior a superior 
 - Título de la serie/peli de una fuente grande y legible 
 - Año, Rating, Género, Reseña, Duración, Ícono de play para que te lleve al trailer.

5. Tablero con mis pelis/series que ya he guardado anteriormente.

**Especificaciones técnicas**
 La aplicación utiliza la API de OMDB (The Open Movie Database), donde toma la data, para buscar películas y series a través de la selección del usuario.
