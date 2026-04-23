

// Genera numeros random de cero a cien
const nota = Math.floor(Math.random() * 101);
console.log(nota)


if( nota < 60) {
    console.log("No aprodabo");
} else if ( nota >= 60 && nota <= 74) {
    console.log("Suficiente");
} else if (nota >= 75 && nota <= 89) {
    console.log("Bien")
} else {
    console.log("Excelente")
}

