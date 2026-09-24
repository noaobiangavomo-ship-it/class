/*
*
* EJERCICIOS BUCLES:
*  - MAP
*  - FOREACH
*  - FILTER
*  - REDUCE
*
* */


// ============================================================
//  EJERCICIOS
// ============================================================


/*
 * 1. Tienes el siguiente array de temperaturas en Celsius registradas
 *    durante una semana:
 *
 *    const temperaturas = [22, 35, 18, 40, 28, 15, 33]; // Estas temperaturas son en Celsius
 *
 *    - Usa map para crear un nuevo array con las temperaturas convertidas
 *      a Fahrenheit. La fórmula es: (celsius * 9/5) + 32
 *    - Usa filter para obtener solo las temperaturas (en Celsius) que
 *      superen los 30 grados.
 *    - Usa forEach para mostrar por consola cada temperatura en Celsius
 *      con el mensaje: "Día X: 22°C" (donde X es el número del día, empezando en 1).
 *
 * */


/*
 * 2. Tienes el siguiente array con los productos de un carrito de compra:
 *
 *    const carrito = [
 *      { nombre: "Camiseta",   precio: 19.99, cantidad: 3 },
 *      { nombre: "Pantalón",   precio: 49.99, cantidad: 1 },
 *      { nombre: "Zapatillas", precio: 89.99, cantidad: 2 },
 *      { nombre: "Calcetines", precio: 4.99,  cantidad: 5 },
 *      { nombre: "Gorra",      precio: 14.99, cantidad: 1 },
 *    ];
 *
 *    - Usa map para crear un nuevo array donde cada producto tenga
 *      una propiedad extra "total" con el resultado de precio * cantidad.
 *    - Usa reduce para calcular el precio total del carrito sumando
 *      el precio * cantidad de cada producto.
 *    - Usa filter para obtener solo los productos cuyo precio unitario
 *      sea menor de 20€.
 *
 * */


/*
 * 3. Tienes el siguiente array con los jugadores de un equipo de fútbol:
 *
 *    const jugadores = [
 *      { nombre: "Messi",    goles: 30, posicion: "Delantero" },
 *      { nombre: "Busquets", goles: 2,  posicion: "Centrocampista" },
 *      { nombre: "Piqué",    goles: 5,  posicion: "Defensa" },
 *      { nombre: "Modric", goles: 10, posicion: "Centrocampista" },
 *      { nombre: "Mbappe",     goles: 28,  posicion: "Delantero" },
 *      { nombre: "Lamine",    goles: 4,  posicion: "Centrocampista" },
 *    ];
 *
 *    - Usa filter para obtener solo los jugadores que jueguen de "Delantero".
 *    - Usa reduce para calcular el total de goles de todo el equipo.
 *    - Usa map para crear un nuevo array con solo los nombres de los jugadores
 *      y sus goles en formato: "Messi - 30 goles".
 *
 * */


/*
 * 4. Tienes el siguiente array con las calificaciones de varios alumnos:
 *
 *    const alumnos = [
 *      { nombre: "Ana",    nota: 8.5 },
 *      { nombre: "Carlos", nota: 4.2 },
 *      { nombre: "Lucía",  nota: 6.0 },
 *      { nombre: "Pedro",  nota: 3.8 },
 *      { nombre: "Sara",   nota: 9.1 },
 *      { nombre: "Diego",  nota: 5.0 },
 *    ];
 *
 *    - Usa filter para obtener solo los alumnos aprobados (nota >= 5).
 *    - Usa map para añadir a cada alumno una propiedad "estado" con el
 *      valor "Aprobado" o "Suspenso" según su nota.
 *    - Usa reduce para calcular la nota media de toda la clase.
 *    - Usa forEach para mostrar por consola el resultado de cada alumno:
 *      "Ana → 8.50 (APROBADO)" si aprobó o "Carlos → 4.20 (SUSPENSO)" si suspendió.
 *
 * */


/*
 * 5. Tienes el siguiente array con las ventas mensuales de una empresa:
 *
 *    const ventas = [
 *      { mes: "Enero",      importe: 12500 },
 *      { mes: "Febrero",    importe: 9800  },
 *      { mes: "Marzo",      importe: 15200 },
 *      { mes: "Abril",      importe: 7300  },
 *      { mes: "Mayo",       importe: 18900 },
 *      { mes: "Junio",      importe: 11400 },
 *    ];
 *
 *    - Usa reduce para calcular el total de ventas del semestre.
 *    - Usa filter para obtener los meses en los que las ventas
 *      superaron los 12.000€.
 *    - Usa map para crear un nuevo array donde el importe de cada mes
 *      tenga aplicado un incremento del 5% (previsión para el año siguiente).
 *    - Usa forEach para mostrar por consola el informe de cada mes:
 *      "Enero: 12.500€".
 *
 * */
