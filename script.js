const formulario = document.getElementById('form')
const numA = document.getElementById('campoA')
const numB = document.getElementById('campoB')


formulario.addEventListener('submit', function(e) {
    e.preventDefault()
    
    if(parseFloat(numA.value) > parseFloat(numB.value)){
        alert('O número do campo B precisa ser maior que o campo A, refaça')
    }else{
        alert('Parabéns')
    }
    
})


