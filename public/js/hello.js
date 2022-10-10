$.ajax({
    url: 'test.php',
    type: "POST",
    dataType: 'json',
    data: formToJson($("form")),
    contentType: 'application/json;charset=UTF-8',
    ...
})


$(document).ready(function() {
    $('#helloform').submit(function() {
        var status = 'Loading...';
        $("#ajax").after(status);
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            dataType: 'json',
            success: function(json) {
                if(json.type == 'success') {
                    $('#msg').css("color","green").html(json.message);
                } else if(json.type == 'warning'){
                    $('#msg').css("color","yellow").html(json.message);
                } else if(json.type == 'error'){
                    $('#msg').css("color","red").html(json.message);
                }
                $('.loading').remove();
            }
        })
        return false;
    });
});
