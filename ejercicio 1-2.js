// Ejercicio 1 
let metros = prompt("Ingrese una distancia en metros y le dire un medio de transporte adecuado:");

if (metros > 100000) {
    document.write("<h1>Avion ✈<h1>")
} else if ( metros > 30000 && metros <= 100000) {
    document.write("<h1>Auto 🚗<h1>")
} else if (metros > 10000 && metros <= 30000) {
    document.write("<h1>Colectivo 🚌<h1>")
} else if (metros > 1000 && metros <= 10000) {
    document.write("<h1>Bicileta 🚲<h1>")
} else if (metros > 0 && metros <= 1000) {
    document.write("<h1>Pie 🚶‍♀️🚶‍♂️<h1>")
}


// Ejercicio 2
let numeros = [1 , 20 , 3 , 5 , 1000 , 10];

for(let i = 0; i < numeros.length; i++) {
    console.log("El numero mas grande es " + numeros[4])
}