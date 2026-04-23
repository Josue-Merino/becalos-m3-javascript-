
# Ejercicio de la lectura de Comparaciones y decisiones en JavaScript

En este repositorio se encuentra la solución al reto de de la lectura de Comparaciones y decisiones en JavaScript donde se resuelve la siguiente problematica.
Ejercicio: Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera
- Si la nota es 90 o más, el estudiante aprueba con "Excelente".
- Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
- Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
- Si la nota es menor de 60, el estudiante no aprueba.

### Solución 

La solución a este desafio se encuentra en el archivo evaluadorNotas.js, donde se implementaron else-if y se creo una variable que cambia de valor cada que el programa se ejecuta en un rango de 0 a 100
NOTA: Aquí debajo se deja otra posible solución donde se solo se agrega un ultimo if para validar que se reciba un mensaje si la nota es mayor de 89 y menor o igual a 100 y un else en caso de que la nota sea distinta de de cero a 100.

```
// Cambiar valor de la nota al que se prefiera
const nota = Math.floor(Math.random() * 101);
console.log(nota)


if( nota < 60) {
    console.log("No aprodabo");
} else if ( nota >= 60 && nota <= 74) {
    console.log("Suficiente");
} else if (nota >= 75 && nota <= 89) {
    console.log("Bien")
} else if (nota >= 90 && nota <= 100){
    console.log("Excelente")
} else {
    console.log("Valor fuera de rango")
}
```
