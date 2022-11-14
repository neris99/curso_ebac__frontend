$(document).ready(function() {

    $('form').on('submit', function(e){
        e.preventDefault()
        const tarefa = $('#nova-tarefa').val()
        const novaTarefa = $(`<li>
        ${tarefa}
        </li>`)
        $(novaTarefa).appendTo('ul')
        $('#nova-tarefa').val('')
    })

    $('#tarefa-efetivada').click(function(){
        $('li').style.textDecorationLineThrough()
    })
})