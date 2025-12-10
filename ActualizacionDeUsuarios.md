Mejorando la implementación de useFetch
Cuando hago un hook de useFetch siempre busco hacerlo lo más flexible y seguro posible, mi principal mejora se centraría en tres áreas clave
Darle capacidad para peticiones POST PUT DELETE
Ahora mismo, mi useFetch solo sirve para leer datos GET si quiero que sirva para enviar datos o modificar, necesito poder pasarle configuraciones de red

1.Hago que el hook acepte un objeto options como segundo argumento que incluye el method y el body para fetch
2.Uso useRef para encapsular esas opciones asegurandome de que el useEffect solo se dispare cuando realmente deba hacerlo y no por un cambio accidental en el objeto options
3.Si la URL o las opciones cambian me aseguro de que la peticion se ejecute de nuevo con la configuración correcta

¿Qué hago para no manejar cada dato individualmente en el formulario?

Cuando se trata de formularios es simple eso creo, Un formulario, un estado

Si estoy creando un formulario para un post con campos para title, body y userId, lo más ineficiente sería crear tres estados y tres funciones set
Lo que implemento es el patrón de objeto único:
Declaro un solo estado con useState que es un objeto con todas las propiedades que necesito enviar:
const [postData, setPostData] = useState({ title: '', body: '', userId: 0 });

Creo una función handleChange que gestiona todos los inputs. Esta función utiliza la desestructuración del evento (e.target) para obtener dinámicamente el name y el value del campo que se acaba de modificar.

Uso las propiedades del objeto e.target:

Uso el name del input para saber qué propiedad del objeto postData debo actualizar.

Uso la sintaxis de propiedad calculada de objeto ([name]: value) para actualizar solo esa clave dentro de mi estado.

const handleChange = (e) => {
    const { name, value } = e.target;

    setPostData(prevData => ({
        ...prevData, 
        [name]: value // Esto actualiza dinámicamente postData.title o postData.body
    }));
};

En el JSX simplemente me aseguro de que el atributo name del input coincida con la clave en mi objeto de estado y le asocio la misma función handleChange a todos los campos

Esto hace que mi codigo sea mucho mas escalable y fácil de mantener si mañana agrego un campo category, solo tengo que agregarlo a mi estado inicial y darle el atributo name="category" al input; el handleChange funciona automáticamente