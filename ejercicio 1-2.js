// Ejercicio 1 
let metros = prompt("Ingrese una distancia en metros y le dire un medio de transporte adecuado:");

if (metros > 100000) {
    document.write("<h1>Avion β<h1>")
} else if ( metros > 30000 && metros <= 100000) {
    document.write("<h1>Auto π<h1>")
} else if (metros > 10000 && metros <= 30000) {
    document.write("<h1>Colectivo π<h1>")
} else if (metros > 1000 && metros <= 10000) {
    document.write("<h1>Bicileta π²<h1>")
} else if (metros > 0 && metros <= 1000) {
    document.write("<h1>Pie πΆββοΈπΆββοΈ<h1>")
}


// Ejercicio 2
let numeros = [1 , 20 , 3 , 5 , 1000 , 10];
let elMayor = 0;

for(let i = 0; i < numeros.length; i++) {
    if (numeros[i] > elMayor) {
        elMayor = numeros[i]
    }
}

console.log(`el mayor de ${numeros} es ${elMayor}`)