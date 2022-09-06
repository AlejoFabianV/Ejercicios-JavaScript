
const box1 = document.getElementById('cuadrado1')
const box2 = document.getElementById('cuadrado2')
const box3 = document.getElementById('cuadrado3')

box1.style.backgroundColor = 'blue'
box1.style.color = 'white'
box1.style.width = '250px'
box1.style.height = '250px'

box2.style.backgroundColor = 'red'
box2.style.color = 'white'
box2.style.width = '250px'
box2.style.height = '250px'

box3.style.backgroundColor = 'green'
box3.style.color = 'white'
box3.style.width = '250px'
box3.style.height = '250px'

box1.addEventListener('click', function(){
    cuadrado1.style.backgroundColor = 'black'
})
box2.addEventListener('click', function(){
    cuadrado2.style.backgroundColor = 'purple'
})
box3.addEventListener('click', function(){
    cuadrado3.style.backgroundColor = 'orange'
})

