# Ejercicio de la lectura de Arreglos y cliclos

En este repositorio se encuentra la solución al reto de de la lectura de arreglos y cliclos en JavaScript donde se resuelve la siguiente problematica.
Ejercicio: Clasificación de Frutas 
Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.
- Declara un arreglo llamado frutas con varios tipos de frutas.
- Crea un objeto para almacenar la cantidad de cada tipo de fruta.
- Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
- Imprime en la consola la cantidad de cada tipo de fruta.
- Opcional: intenta implementar la solución con el otro ciclo también (for/while).

### Solución 

La solución a este desafio se encuentra en el archivo clasificacionFrutas.js, donde se implementó la solucion con el ciclo for.
NOTA: Aquí debajo se deja otra solución con el ciclo while.

```
let i = 0; // Índice en 0

while (i < frutas.length) {
  let frutaActual = frutas[i];

  if (conteoFrutas[frutaActual]) {
    // Si la fruta ya existe en el objeto, agregamos 1
    conteoFrutas[frutaActual]++;
  } else {
    // Si es la primera vez que aparece, la inicializamos en 1
    conteoFrutas[frutaActual] = 1;
  }

  i++; 
}

console.table(conteoFrutas);
```