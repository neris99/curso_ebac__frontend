const form = document.getElementById('form')
const numA = parseFloat(document.getElementById('campoA').value)
const numB = parseFloat(document.getElementById('campoB').value)




function validaForm(){
    if(numA > numB){
        alert('O número do campo B precisa ser maior que o campo A, refaça')
    }else{
        alert('Parabéns')
    }
}
