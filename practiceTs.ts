let mensaje: string = 'Hola, TypeScript!';
let numero: number = 42;
let esVerdadero: boolean = true;

function saludar(nombre: string): string {
    return `Hola, ${nombre}!`
}

let saludo: string = saludar("Juan");

console.log(saludo);

interface Punto {
    x: number;
    y: number;
}

let punto: Punto = { x: 10, y: 20 };
console.log(`Coordenadas: ${punto.x}, ${punto.y}`)

//Al usar esto, no se sabe que pruebaObjeto tiene una variable name si está con el tipo object
/* let pruebaObjeto: object = {
    name: "Camilo",
    lastname: "Muñoz"
} */
/* En cambio se debe hacer una interfaz o crear el objeto directamente */
/* Cuandos e coloca un signo de interrogación en una variable, quiere decir que no es una variable obligatoria */
interface PruebaInterfaz {
    name: string,
    lastname?: string,
}
/* Se agrega tipo apartir de una interfaz */
let pruebaObjeto: PruebaInterfaz = {
    name: 'Camilo',
}

/* Se crea directamente como objeto */
let pruebaObjeto2 = {
    name: 'Camilo',
    lastname: 'Muñoz'
}

pruebaObjeto.name = "Ricardo"
pruebaObjeto.lastname = "Milos"

/* pruebaObjeto2 = "asd" */ // Esto da error ya que ya dice que no es asignable un string a un objeto

/* pruebaObjeto2.hora = 2 */ //Esto da error ya que dice que hora no existe en el objeto

console.log(`Los participantes son: \n-${pruebaObjeto.name} ${pruebaObjeto.lastname}\n-${pruebaObjeto2.name} ${pruebaObjeto2.lastname}`)


/* Tipos */

let numero1: number = 42;
let texto: string = "Hola, TypeScript!";
let esVerdadero1: boolean = true;
let nulo: null = null;
let indefinido: undefined = undefined;
let objeto = { clave: "valor" };
let objetoVacio: {} = {};

//Tipar a tipo function

type State<T> = [() => T, (newState: T) => void];

function useState<T>(initialValue: T): State<T> {
  // Estado actual
  let state: T = initialValue;

  // Función para obtener el estado actual
  function getState(): T {
    return state;
  }

  // Función para actualizar el estado
  function setState(newState: T): void {
    state = newState;

    // Aquí podrías agregar lógica adicional, como re-renderizar tu componente
    // o ejecutar efectos secundarios dependiendo del cambio de estado.
  }

  // Devolver un array con la función para obtener el estado y la función para actualizar el estado
  return [getState, setState];
}

const [ hero, setHero ] = useState<string>('Thor')

console.log(hero())

setHero('Iron Man')

console.log(hero())


//Unknown

let desconocido: unknown;

console.log(desconocido, typeof desconocido)

desconocido = "buenas"

console.log(desconocido, typeof desconocido)

//Array de dos tipos 
const languages: (string | number)[] = []

languages.push('JavaScript')
languages.push('TypeScript')
languages.push(2)
// languages.push(true) // Error por que pide solamente los tipos que estan puesto al array

//Otra manera de tipar array de dos tipos

const languages2:Array<string | number> = []

languages.push('JavaScript')
languages.push('TypeScript')
languages.push(2)
// languages.push(true) // Error por que pide solamente los tipos que estan puesto al array


//Array numbers

let numeros: number[] = [1, 2, 3];

//Formas diferentes de tipar un array
//Array Strings

let palabras: string[] = ["uno", "dos", "tres"];
let palabras2: Array<String> = ["uno", "dos", "tres"];

//Array de objetos

let objetos: Array<PruebaInterfaz> = [
    {
        name: 'Ricardo',
        lastname: 'Milos'
    },
    {
        name: 'Camilo',
        lastname: 'Muñoz'
    }

];

//Tuplas: Arrays con un número fijo de elementos y tipos específicos.

let tupla: [number, string] = [1, "dos"];

//Enum, Enumeraciones

enum Colores {
    Rojo,
    Verde,
    Azul
}

let color: Colores = Colores.Verde; // 1

console.log(color)

//Any: ignora cualquier tipo

let cualquierCosa: any = "puede ser cualquier cosa";

//Void: Se utiliza para funciones que no devuelven ningún valor.

function imprimirMensaje(): void {
    console.log("Hola, TypeScript!");
}
imprimirMensaje();

/* Never, en TypeScript se utiliza para representar 
un valor que nunca debe ocurrir. Se utiliza típicamente en 
situaciones donde una función no puede retornar (ya sea porque 
lanza una excepción, entra en un bucle infinito o tiene una 
condición que siempre será falsa) */

function lanzarError(mensaje: string): never {
    throw new Error(mensaje);
}

function procesarDatos(datos: string | null): string {
    if (datos === null) {
        // En este caso, lanzamos una excepción ya que no podemos procesar datos nulos.
        lanzarError("Los datos no pueden ser nulos.");
    }

    // Procesar datos aquí y retornar un resultado válido.
    return datos.toUpperCase();
}

try {
    const resultado = procesarDatos("Hola, mundo!");
    /* const resultado = procesarDatos(null); //Con esto se ejecuta el lanzar error y retorna el mensaje del catch */
    console.log(resultado);
} catch (error: any) {
    console.error("Ocurrió un error:", error.message);
}


//Union Types |: Permite tener un valor que puede ser de uno de varios tipos.

let variableUnion: number | string = 42;
variableUnion = "Hola";
console.log(variableUnion)
variableUnion = 2
console.log(variableUnion)

type CustomType = 'local' | 'prometedor'       | 'nuevo'

let customtypevariable: CustomType = 'local'
// let customtypevariable2: CustomType = 'nuevo1' // Error por que espera uno de los union types que se encuentra en el type

//Intersection Types & : Combina varios tipos en uno solo.

interface ConNombre {
    nombre: string;
}

interface ConEdad {
    edad: number;
}

let persona: ConNombre & ConEdad = {
    nombre: "Juan",
    edad: 25
};

//Tipos avanzados - alias con 'type: Permite crear alias para tipos existentes.'

type Punto2 = {
    x: number;
    y: number;
};

let coordenada: Punto2 = { x: 10, y: 20 };

//Tipos avanzados - interface: Define la forma de un objeto y puede ser implementada por clases.

interface Animal {
    nombre: string;
    sonido: string;
}

// Class: Define clases en TypeScript.

class Perro implements Animal {
    nombre: string = "Max";
    sonido: string = "Guau";
}

//Genéricos: Variable de tipo genérico. Permite escribir funciones y clases que pueden trabajar con diferentes tipos de datos.

function imprimirElemento<T>(elemento: T): void {
    console.log(elemento);
}

imprimirElemento<number>(42);
imprimirElemento<string>("Hola");




console.log(palabras2)
console.log(objetos)


/* En programación orientada a objetos, una clase es una 
plantilla para la creación de objetos. Representa un conjunto 
de propiedades y métodos que los objetos creados a partir 
de esa clase compartirán. Las clases son una forma de abstracción 
que ayuda a organizar y estructurar el código de manera más 
modular y reutilizable. */

/* class NombreDeLaClase {
    // Propiedades de la clase
    propiedad1: tipo1;
    propiedad2: tipo2;

    // Constructor
    constructor(parametro1: tipo1, parametro2: tipo2) {
        this.propiedad1 = parametro1;
        this.propiedad2 = parametro2;
    }

    // Métodos de la clase
    metodo1(): tipoDeRetorno1 {
        // Código del método
    }

    metodo2(parametro: tipoDeParametro): tipoDeRetorno2 {
        // Código del método
    }
} */

/* Explicación de las partes:

class NombreDeLaClase: Declaración de la clase con un nombre descriptivo.

Propiedades: Variables que pertenecen a la clase y definen sus características.

Constructor: Un método especial llamado constructor que se ejecuta automáticamente cuando se crea un objeto de la clase. Se utiliza para inicializar las propiedades de la clase.

Métodos: Funciones que realizan operaciones específicas asociadas a la clase.

En TypeScript, puedes también definir la visibilidad de las propiedades y métodos utilizando modificadores de acceso como public, private o protected. Por defecto, si no se especifica un modificador de acceso, se considera public. */

class Persona {
    // Propiedades
    nombre: string;
    //Cuando no se especifíca el modificador, es public por defecto
    public edad: number;

    // Constructor
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método
    saludar(): void {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Creación de un objeto de la clase Persona
const persona1 = new Persona("Juan", 30);

// Llamada a un método
persona1.saludar();

/* En TypeScript, los modificadores de acceso 
(public, private y protected) son utilizados para controlar el 
acceso a las propiedades y métodos de una clase. 
Estos modificadores afectan la visibilidad de los miembros 
de una clase y ayudan a encapsular la implementación de la clase. */

//Public

/* Descripción: El miembro (propiedad o método) es accesible desde cualquier lugar, tanto desde dentro de la propia clase como desde fuera de la clase.

Cuándo usar: Por defecto, todos los miembros de una clase son public, por lo que si no se especifica un modificador de acceso, se considera public. */

class Persona2 {
    public nombre: string;
    numero2: number | undefined;

    //Constructor tambien son los parámetros que va a recibir la clase
    constructor(nombre: string, numero2?: number) {
        this.nombre = nombre;
        this.numero2 = numero2;
    }

    saludar3(): void {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.numero2} años.`);
    }
}

const persona2 = new Persona2("Camilo", 26);
persona2.saludar3()
console.log(persona2.nombre);

//Private

/* Descripción: El miembro es accesible solo dentro de la propia clase. No puede ser accedido desde fuera de la clase ni desde clases derivadas (heredadas).

Cuándo usar: Cuando se quiere restringir el acceso a una propiedad o método únicamente a la propia clase. */

class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    private consultarSaldo(): number {
        return this.saldo; // Acceso permitido ya que estamos dentro de la propia clase
    }
}

const cuenta = new CuentaBancaria(1000);
// console.log(cuenta.saldo); // Error: saldo es private y no es accesible desde fuera de la clase
// console.log(cuenta.consultarSaldo()) Error: consultarSaldo es private y no es accesible desde fuera de la clase

//Protected

/* Descripción: El miembro es accesible dentro de la propia clase y también por clases derivadas (heredadas) de la clase actual.

Cuándo usar: Cuando se quiere que las clases que heredan de la clase actual tengan acceso a ciertos miembros, pero se quiere mantener el acceso restringido desde fuera de la clase. */

class Vehiculo {
    protected modelo: string = '';
    year: number

    constructor(modelo: string, year: number) {
        this.modelo = modelo;
        this.year = year;
    }
}

class Coche extends Vehiculo {

    acelerar(): void {
        console.log(`Acelerando en un ${this.modelo} del año ${this.year}.`); // Acceso permitido ya que modelo es protected
    }
}

const coche = new Coche("Sedán", 1998);

const vehiculo = new Vehiculo("Mazda", 1990)
// console.log(vehiculo.modelo) // Error: modelo es protected y no es accesible
coche.acelerar()
// console.log(coche.modelo); // Error: modelo es protected y no es accesible desde fuera de la clase ni de Vehiculo

//New se utiliza para crear una nueva instancia (objeto) de una clase. Cuando se usa new seguido del nombre de una clase, se invoca el constructor de esa clase y se crea un nuevo objeto basado en la plantilla proporcionada por la clase.

class Persona4 {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    saludar(): void {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
}

// Creación de una nueva instancia de la clase Persona usando new
const juan = new Persona4("Juan");

// Llamada a un método de la instancia
juan.saludar(); // Imprime: Hola, mi nombre es Juan.

/* En este ejemplo, new Persona("Juan") crea una nueva instancia de 
la clase Persona y llama al constructor de la clase con el argumento 
"Juan" para inicializar la propiedad nombre de la instancia.

En resumen, new se utiliza para instanciar (crear) objetos a partir 
de una clase. Cada vez que utilizas new, se reserva un espacio en la 
memoria para el nuevo objeto y se ejecuta el constructor de la clase 
para realizar cualquier inicialización necesaria. */

//Tipar objeto dentro de una funcion

function saludar1000({name, age}: {name: string, age: number}){
    console.log(name, age)
}

saludar1000({name: 'Cadavid', age: 20})


//Parámetros function

const sayHiFromFunction = (fn: (name: string) => void) => {
    return fn('Miguel')
}

sayHiFromFunction((name: string) => {
    console.log(`Hola ${name}`)
})


//Tipar arrow functions

const sumarArrow = (a: number, b: number): number => a+b;

const restarArrow: (a: number, b: number) => number = (a, b) => a-b

//read-only

interface Nuevo {
    id?: number | string,
    isActive: boolean,
}

let  nuevaso: Nuevo = {
    isActive: true,
    id: 2
}

// nuevaso.id = 2 // Error por que id está como readonly

// Object Freeze

interface Nuevo2 {
    id?: number,
    isActive: boolean,
}

let  nuevaso2: Nuevo = Object.freeze({
    isActive: true,
    id: 2
})

nuevaso2.isActive = false
nuevaso2.id = 20

console.log(nuevaso2) // { isActive: true, id: 2 } por que el Object.freeze no deja que cambie

//Template union type

type HeroId = `${string}-${string}-${string}-${string}`

interface Hero {
    id: HeroId
    name: string
}

let ironMan: Hero = {
    // id: 1233 //Error por que espera un string-string-string-string
    // id: '1233' //Error por que espera un string-string-string-string
    id: '1233-1233-1233-1233',
    name: 'Iron Man'
}

console.log(ironMan)

type HexadecimalColor = `#${string}`

const colorHex: HexadecimalColor = '#000000'
// const colorHexa: HexadecimalColor = '000000' // Error por que espera un #

//Prueba

interface HeroProperties {
    isActive: boolean,
    address: {
        planet: string,
        city: string
    }
}

const addressHero: HeroProperties['address'] = {
    city: 'Cali',
    planet: 'Tierra'
}

console.log(addressHero)

//Type from typeof 

const addressTest = {
    planet: 'Marte',
    city: "Byug'onmurtic"
}

type Address = typeof addressTest;

const addressSubnautic: Address = {
    planet: 'Jupiter',
    city: 'Astralord'
}

//Type from function return quiero recuperar el tipo de lo que retorna la función


function createAddress () {
    return {
        planet: 'Jupiter',
        city: 'Astralord'
    }
}

type AddressFunction = ReturnType<typeof createAddress>



