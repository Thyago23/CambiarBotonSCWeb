JSON Server es como hacer un poquito de trampa en ciertas cosas, es como crear una base de datos falsa súper rapida para que la aplicación pueda empezar a funcionar inmediatamente

La Ventaja: Es instantáneo, pones un archivo .json con tus datos y ya, tienes una API con Guardar, Leer, Borrar, es perfecto para proyectos rápidos

La desventaja: Solo sirve para simular nunca hay que usarlo para una aplicación real que vaya a ver la luz, no tiene seguridad, no maneja a muchos usuarios a la vez y no puede hacer cálculos complejos

Cuándo usarlo?
Siempre que quieras probar cómo se ve algo rápido o si el backend está lento

useNavigate:
Usamos useNavigate en nuestro código cuando terminamos de guardar algo y queremos que la app automáticamente nos mande de vuelta a la lista

Por que es un Hook? 
La cosa es que React quiere tener el control useNavigate no solo cambia la dirección del navegador, le dice a React en si actualiza toda la patalla, un hook permite que todos los componentes puedan comunicarce para hablar con React, una función normal no tiene esa conexión

Como mejoramos esto
Si queremos que el código sea más fácil de mantener y que la gente no se enoje al usarlo, podemos hacer dos cosas:

Para el Mantenimiento:

En lugar de pasar la función de guardar onUpdate como una cadena de favores por mil componentes prop drilling, usa un Contenedor Central de Datos como Context API

Asi el formulario solo se encarga de mostrar los datos y decir Guarda esto La parte difícil de hablar con la API se queda en ese contenedor central, haciendo que todo sea más ordenado y fácil de arreglar

UX
Implementar Feedback Visual al guardar deshabilitar los botones y mostrar un spinner Guardando, luego usar Notificaciones Toast para confirmar al usuario el resultado de la operación éxito o error