// Gestión Estudiante
class Estudiante {

    // Atributos y constructor
    constructor(nombre, edad, matricula) {
        this.nombre = nombre;
        this.edad = edad;
        this.matricula = matricula;
    }

    // Método para mostrar los datos
    mostrarDatos() {
        console.log("Nombre: " + this.nombre);
        console.log("Edad: "
             + this.edad);
        console.log("Matrícula: " + this.matricula);
        console.log("----------------------");
    }

    // Método para actualizar la edad
    actualizarEdad(nuevaEdad) {
        this.edad = nuevaEdad;
        console.log("Edad actualizada correctamente.");
    }
}

// Programa principal

// Crear objetos
const estudiante1 = new Estudiante("Carlos", 18, "A001");
const estudiante2 = new Estudiante("Maria", 20, "A002");
const estudiante3 = new Estudiante("Juan", 19, "A003");

// Mostrar información
estudiante1.mostrarDatos();
estudiante2.mostrarDatos();
estudiante3.mostrarDatos();

// Actualizar información
estudiante1.actualizarEdad(19);

// Mostrar datos actualizados
estudiante1.mostrarDatos();