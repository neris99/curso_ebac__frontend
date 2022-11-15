$(document).ready(function() {

    $('form').on('submit', function(e){
        e.preventDefault()
        const tarefa = $('#nova-tarefa').val()
        const novaTarefa = $(`<li>
        ${tarefa}
        </li>`).click(function(){
            $('#tarefa-efetivada').attr('style','text-decoration: line-through')
        })
        $(novaTarefa).appendTo('ul')
        $('#nova-tarefa').val('')
    })
})