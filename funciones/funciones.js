// Array para agregar libros
const librosLeidos = []

// Úso de método push para insertar libros al array
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

// Recorremos e imprimimos cada libro con el método forEach
function mostrarLibrosLeidos() {
    librosLeidos.forEach( libro => console.log(libro))
}

// Invocaciones para agregar libros
agregarLibro("El Gran Libro de HTML5, CSS3 y JavaScript")
agregarLibro("JavaScript: La Guía Definitiva")
agregarLibro("CSS Moderno")
agregarLibro("Git y Github")

// Invocación para mostrar libros
mostrarLibrosLeidos()









