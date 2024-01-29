var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mensaje = 'Hola, TypeScript!';
var numero = 42;
var esVerdadero = true;
function saludar(nombre) {
    return "Hola, ".concat(nombre, "!");
}
var saludo = saludar("Juan");
console.log(saludo);
var punto = { x: 10, y: 20 };
console.log("Coordenadas: ".concat(punto.x, ", ").concat(punto.y));
/* Se agrega tipo apartir de una interfaz */
var pruebaObjeto = {
    name: 'Camilo',
};
/* Se crea directamente como objeto */
var pruebaObjeto2 = {
    name: 'Camilo',
    lastname: 'Muñoz'
};
pruebaObjeto.name = "Ricardo";
pruebaObjeto.lastname = "Milos";
/* pruebaObjeto2 = "asd" */ // Esto da error ya que ya dice que no es asignable un string a un objeto
/* pruebaObjeto2.hora = 2 */ //Esto da error ya que dice que hora no existe en el objeto
console.log("Los participantes son: \n-".concat(pruebaObjeto.name, " ").concat(pruebaObjeto.lastname, "\n-").concat(pruebaObjeto2.name, " ").concat(pruebaObjeto2.lastname));
/* Tipos */
var numero1 = 42;
var texto = "Hola, TypeScript!";
var esVerdadero1 = true;
var nulo = null;
var indefinido = undefined;
var objeto = { clave: "valor" };
var objetoVacio = {};
//Unknown
var desconocido;
console.log(desconocido, typeof desconocido);
desconocido = "buenas";
console.log(desconocido, typeof desconocido);
//Array numbers
var numeros = [1, 2, 3];
//Formas diferentes de tipar un array
//Array Strings
var palabras = ["uno", "dos", "tres"];
var palabras2 = ["uno", "dos", "tres"];
//Array de objetos
var objetos = [
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
var tupla = [1, "dos"];
//Enum, Enumeraciones
var Colores;
(function (Colores) {
    Colores[Colores["Rojo"] = 0] = "Rojo";
    Colores[Colores["Verde"] = 1] = "Verde";
    Colores[Colores["Azul"] = 2] = "Azul";
})(Colores || (Colores = {}));
var color = Colores.Verde; // 1
console.log(color);
//Any: ignora cualquier tipo
var cualquierCosa = "puede ser cualquier cosa";
//Void: Se utiliza para funciones que no devuelven ningún valor.
function imprimirMensaje() {
    console.log("Hola, TypeScript!");
}
imprimirMensaje();
/* Never, en TypeScript se utiliza para representar
un valor que nunca debe ocurrir. Se utiliza típicamente en
situaciones donde una función no puede retornar (ya sea porque
lanza una excepción, entra en un bucle infinito o tiene una
condición que siempre será falsa) */
function lanzarError(mensaje) {
    throw new Error(mensaje);
}
function procesarDatos(datos) {
    if (datos === null) {
        // En este caso, lanzamos una excepción ya que no podemos procesar datos nulos.
        lanzarError("Los datos no pueden ser nulos.");
    }
    // Procesar datos aquí y retornar un resultado válido.
    return datos.toUpperCase();
}
try {
    var resultado = procesarDatos("Hola, mundo!");
    /* const resultado = procesarDatos(null); //Con esto se ejecuta el lanzar error y retorna el mensaje del catch */
    console.log(resultado);
}
catch (error) {
    console.error("Ocurrió un error:", error.message);
}
//Union Types |: Permite tener un valor que puede ser de uno de varios tipos.
var variableUnion = 42;
variableUnion = "Hola";
console.log(variableUnion);
variableUnion = 2;
console.log(variableUnion);
var persona = {
    nombre: "Juan",
    edad: 25
};
var coordenada = { x: 10, y: 20 };
// Class: Define clases en TypeScript.
var Perro = /** @class */ (function () {
    function Perro() {
        this.nombre = "Max";
        this.sonido = "Guau";
    }
    return Perro;
}());
//Genéricos: Variable de tipo genérico. Permite escribir funciones y clases que pueden trabajar con diferentes tipos de datos.
function imprimirElemento(elemento) {
    console.log(elemento);
}
imprimirElemento(42);
imprimirElemento("Hola");
console.log(palabras2);
console.log(objetos);
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
var Persona = /** @class */ (function () {
    // Constructor
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // Método
    Persona.prototype.saludar = function () {
        console.log("Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os."));
    };
    return Persona;
}());
// Creación de un objeto de la clase Persona
var persona1 = new Persona("Juan", 30);
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
var Persona2 = /** @class */ (function () {
    //Constructor tambien son los parámetros que va a recibir la clase
    function Persona2(nombre, numero2) {
        this.nombre = nombre;
        this.numero2 = numero2;
    }
    Persona2.prototype.saludar3 = function () {
        console.log("Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.numero2, " a\u00F1os."));
    };
    return Persona2;
}());
var persona2 = new Persona2("Camilo", 26);
persona2.saludar3();
console.log(persona2.nombre);
//Private
/* Descripción: El miembro es accesible solo dentro de la propia clase. No puede ser accedido desde fuera de la clase ni desde clases derivadas (heredadas).

Cuándo usar: Cuando se quiere restringir el acceso a una propiedad o método únicamente a la propia clase. */
var CuentaBancaria = /** @class */ (function () {
    function CuentaBancaria(saldoInicial) {
        this.saldo = saldoInicial;
    }
    CuentaBancaria.prototype.consultarSaldo = function () {
        return this.saldo; // Acceso permitido ya que estamos dentro de la propia clase
    };
    return CuentaBancaria;
}());
var cuenta = new CuentaBancaria(1000);
// console.log(cuenta.saldo); // Error: saldo es private y no es accesible desde fuera de la clase
// console.log(cuenta.consultarSaldo()) Error: consultarSaldo es private y no es accesible desde fuera de la clase
//Protected
/* Descripción: El miembro es accesible dentro de la propia clase y también por clases derivadas (heredadas) de la clase actual.

Cuándo usar: Cuando se quiere que las clases que heredan de la clase actual tengan acceso a ciertos miembros, pero se quiere mantener el acceso restringido desde fuera de la clase. */
var Vehiculo = /** @class */ (function () {
    function Vehiculo(modelo, year) {
        this.modelo = '';
        this.modelo = modelo;
        this.year = year;
    }
    return Vehiculo;
}());
var Coche = /** @class */ (function (_super) {
    __extends(Coche, _super);
    function Coche() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coche.prototype.acelerar = function () {
        console.log("Acelerando en un ".concat(this.modelo, " del a\u00F1o ").concat(this.year, ".")); // Acceso permitido ya que modelo es protected
    };
    return Coche;
}(Vehiculo));
var coche = new Coche("Sedán", 1998);
var vehiculo = new Vehiculo("Mazda", 1990);
// console.log(vehiculo.modelo) // Error: modelo es protected y no es accesible
coche.acelerar();
// console.log(coche.modelo); // Error: modelo es protected y no es accesible desde fuera de la clase ni de Vehiculo
//New se utiliza para crear una nueva instancia (objeto) de una clase. Cuando se usa new seguido del nombre de una clase, se invoca el constructor de esa clase y se crea un nuevo objeto basado en la plantilla proporcionada por la clase.
var Persona4 = /** @class */ (function () {
    function Persona4(nombre) {
        this.nombre = nombre;
    }
    Persona4.prototype.saludar = function () {
        console.log("Hola, mi nombre es ".concat(this.nombre, "."));
    };
    return Persona4;
}());
// Creación de una nueva instancia de la clase Persona usando new
var juan = new Persona4("Juan");
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
function saludar1000(_a) {
    var name = _a.name, age = _a.age;
    console.log(name, age);
}
saludar1000({ name: 'Cadavid', age: 20 });
//Parámetros function
var sayHiFromFunction = function (fn) {
    return fn('Miguel');
};
sayHiFromFunction(function (name) {
    console.log("Hola ".concat(name));
});
//Tipar arrow functions
var sumarArrow = function (a, b) { return a + b; };
var restarArrow = function (a, b) { return a - b; };
var nuevaso = {
    isActive: true,
    id: 2
};
var nuevaso2 = Object.freeze({
    isActive: true,
    id: 2
});
nuevaso2.isActive = false;
nuevaso2.id = 20;
console.log(nuevaso2); // { isActive: true, id: 2 } por que el Object.freeze no deja que cambie
var ironMan = {
    // id: 1233 //Error por que espera un string-string-string-string
    // id: '1233' //Error por que espera un string-string-string-string
    id: '1233-1233-1233-1233',
    name: 'Iron Man'
};
console.log(ironMan);
