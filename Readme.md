<div style="display: flex; align-items: center;gap:10px;">
<img src="assets/rxjs1.png" alt="Logo" style="width:50px;"/>
<p style="font-size:3rem;text-align:center;">ReactiveX - RxJs</p>
</div>

## Que es ReactiveX - RxJs?
Es una API para programacion asincrona usando observables.
ReactiveX es una combinacion de las mejores ideas de el patron observador,el patron iterador y la programacion funcional.

## Cuando usar programacion Reactiva?
- Eventos en la interfaz de usuario.
- Cuando es necesario notificar sobre cambios en objeto(s).
- Comunicaciones por socket.
- Cuando necesitamos trabajar con flujos de informacion.
## Piezas fundamentales de la programacion reactiva
- Observables
- Subscribers
- Operators
### Observables
- Pieza fundamental de la programcion reactiva.
- Son la fuente de informacion.
- Pueden emitir multiples valores solo uno o ninguno.
- Pueden emitir errores (infinitos o finitos). Cuando son finitos ellos pueden completarse.
- Pueden ser sincronos o asincronos.
### Subscribers
- Son los que se subscriben a un observable,esto es estar pendiente de lo que dice un observable.
- Consumen / observan la data del observable.
- Pueden recibir los errores y eventos del observable(se desconoce todo lo que viene por detras).
### Operators
- Son muy utilizados para transformar los observables(map,group,scan).
- Son utilizados para filtrar observables (filter,distinct,skip,debounce ..).
- Son usados para combinar observables.
- Son usados para crear observables.
## Beneficios de la programacion reactiva
- Evitar el "callback hell".
- Trabajar de forma simple tareas sincronas y asincronas.
- Uso de operadores para reducir o simplificar el trabajo.
- Es facil de transformar los flujos (streams) de informacion.
- Codigo mas limpio y facil de leer.
- Facil de implementar.
- Facil anexar procedimientos sin alterar el producto final.
 
Para mas informacion se pueden consultar los siguientes enlaces [ReactiveX](https://reactivex.io/) y [Rxjs-documentacion](https://rxjs.dev/)
## Que es el patron observer?
Es un patron de diseño de software que define una dependencia del tipo unos a muchos entre objetos, de manera que cuando uno de los objetos cambia su estado, notifica esta cambio a todos los dependientes.
### Ejemplo del patron observer
Un ejemplo claro puede ser la de un semaforo, en este ejemplo el semaforo seria un observable y los camiones o autos o cualquier tipo de movilidad terrestre serian los observes, estos se subscriben al semaforo para estar atentos a los cambios de estado del mismo, una vez que el semaforo por ejemplo cambia a verde los autos avanzan y despues cancelan la subscripcion.
Para mas informacion podemos consultar a [Refactoring Guru](https://refactoring.guru/es/design-patterns/observer)
## Que es el patron iterator?
Iterator es un patrón de diseño de comportamiento que te permite recorrer elementos de una colección sin exponer su representación subyacente (lista, pila, árbol, etc.).
En POO, el patron iterador define una interfaz que declara los metodos necesarios para acceder secuencialmente a un grupo de objetos de una coleccion.
### Ejemplo del patron iterador
Un ejmplo puede ser dada una lista de frutas nosotros queremos cual es el primero, el del medio,el penultimo o ultimo entonces para esto nosotros necesitamos metodos que nos ayuden a poder recorrer nuesta lista entonces ahi entra el patron iterator, creamos una interfaz y luego nuestro iterador y este implementara nuestra interfaz para asi poder tener los metodos ya definidos en la interfaz.
## Que es la programacion funcional?
Es basicamente, crear un conjunto de funciones que tengan un objetivo en especifico.
Un ejemplo seria si yo tengo una funcion que recibe un argumento como A y este me devuelve A + 1 entonces esta funcion solo cumplira este objetivo, sin efectos secundarios y sin mutar la data.
## En resumen
### Patron observer
Notificar cuando hay cambios siempre y cuando este suscrito.
### Patron iterator
Poder ejecutar operaciones secuenciales en diferentes tipos de coleccion.
### Functional Programing
Tener funciones con tareas especificas que reciban argumentos y no mutes la informacion.
## Diagrama de Canicas
Los diagramas de canicas nos ayudan a visualizar los observables a traves del tiempo, estos se pueden definir con el signo $ al final del nombre.
Definidos mediante una linea recta y una flecha para representar el tiempo, los valores se representan mediante circulos o canicas.
Los observables pueden terminar de dos maneras, complete y error representados por una linea transversal si esta completada la linea del tiempo y una x si es que hubiera habido algun error, en ambos casos el observable dejara de emitir valores.
![marble diagram](/assets/canicas.png)

Un ejemplo podria ser si creamos un observable asociado a un operador que en este caso seria el scan, cuando el observable emite un valor este pasa por el operador y genera un nuevo resultado hasta que el intervalo de tiempo se complete.
![example diagram](/assets/ejemplo-canicas.png)




