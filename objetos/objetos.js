


const libro1 = {
  titulo: "El Gran Libro de HTML5, CSS3 y JavaScript",
  autor: "Juan Diego Gauchat",
  year: 2017,
  estado: "disponible",
  describirLibro: function() {
    console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.year}, el estado es: ${this.estado}.`);
  },
  capitulos: ["Estructura de HTML5", "Estilos con CSS3", "Programación en JavaScript"],
  agregarCapitulo: function(nombre) {
    this.capitulos.push(nombre);
  }
};

const libro2 = {
  titulo: "JavaScript: La Guía Definitiva",
  autor: "David Flanagan",
  year: 2021, 
  estado: "prestado",
  describirLibro: function() {
    console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.year}, el estado es: ${this.estado}.`);
  }, 
  capitulos: ["Tipos y valores", "Funciones", "Clases y módulos"],
  agregarCapitulo: function(nombre) {
    this.capitulos.push(nombre);
  }
};

const libro3 = {
  titulo: "CSS Moderno",
  autor: "Juan Andres Nuñez",
  year: 2020,
  estado: "disponible",
  describirLibro: function() {
    console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.year}, el estado es: ${this.estado}.`);
  },
  capitulos: ["Flexbox", "CSS Grid", "Custom Properties"],
  agregarCapitulo: function(nombre) {
    this.capitulos.push(nombre);
  }
};

// Úso de métodos
libro1.describirLibro();
libro1.agregarCapitulo("APIs de HTML5");
console.log(libro1.capitulos);
console.log(libro2.autor);
console.log(libro3.estado);