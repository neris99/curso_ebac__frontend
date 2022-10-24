const formulario = document.getElementById('#form')
const numA = parseFloat(document.getElementById('#campoA'))
const numB = parseFloat(document.getElementById('#campoB'))


formulario.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(numA,numB)
    if(numA > numB){
        alert('O número do campo B precisa ser maior que o campo A, refaça')
    }else{
        alert('Parabéns')
    }
    
})

//function validaForm(){
//    if(numA > numB){
//        alert('O número do campo B precisa ser maior que o campo A, refaça')
//    }else{
//        alert('Parabéns')
//    }
//}
