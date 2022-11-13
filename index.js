$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault()
        const tarefa = $('#nova-tarefa').val()
        const novaTarefa = $('<li></li>')
        $(`${tarefa}`).appendTo(novaTarefa)
        $(novaTarefa).appendTo('ul')
    })
})