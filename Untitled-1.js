// Clase Estudiante
class Estudiante {

    // Constructor
    constructor(nombre, edad, matricula) {
        this.nombre = nombre;
        this.edad = edad;
        this.matricula = matricula;
    }

    // Método para mostrar los datos
    mostrarDatos() {
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + this.edad);
        console.log("Matrícula: " + this.matricula);
        console.log("-------------------------");
    }

    // Método para actualizar la edad
    actualizarEdad(nuevaEdad) {
        this.edad = nuevaEdad;
        console.log("La edad se ha actualizado.");
    }
}

// Programa principal

// Instanciación de objetos
const estudiante1 = new Estudiante("Carlos", 18, "A001");
const estudiante2 = new Estudiante("Maria", 20, "A002");

// Mostrar información de los estudiantes
estudiante1.mostrarDatos();
estudiante2.mostrarDatos();

// Actualizar la edad
estudiante1.actualizarEdad(19);

// Mostrar los datos actualizados
estudiante1.mostrarDatos();