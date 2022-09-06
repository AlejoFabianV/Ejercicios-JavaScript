function contarLetras() {

    let total = 140;

    setTimeout(function() {

        let valor = document.getElementById('contador');
        let respuesta = document.getElementById('respuesta');
        let cantidad = valor.value.length;

        console.log(cantidad)
        document.getElementById('respuesta').innerHTML = cantidad + ' Te quedan ' + (total - cantidad);

        if (total - cantidad <= 0) {
            respuesta.style.color = 'red';
        }else{
            respuesta.style.color = 'black'
        }
    })
}