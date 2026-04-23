const frutas = ["Manzana", "Plátano", "Fresa", "Manzana", "Mango", "Pera", "Fresa", "Uva"];

const conteoFrutas = {}


for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
    let frutaActual = frutas[i]
    
    if (conteoFrutas[frutaActual]) {
        // Si la fruta ya existe en el objeto, agregamos 1
        conteoFrutas[frutaActual]++;
    } else {
        // Si es la primera vez que aparece, la inicializamos en 1
        conteoFrutas[frutaActual] = 1;
    }
}

console.table(conteoFrutas)
