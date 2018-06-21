// A $( document ).ready() block.
$( document ).ready(function() {
    

    $( ".register" ).click(function() {
      
        var data= {
            email:$("#email").val(),
            password:$("#password").val(),
            name: {
                first: $("#firstName").val(),
                last:$("#lastName").val()
            },
            phone: $("#numberPhone").val(),
            username: $("#username").val()
        }
        console.log(data);
        $.ajax({
            type: 'POST', 
            url: 'http://localhost:3001/users',
            data:data,
            dataType: 'json',
            success: function(data) {
                console.log(data);
               alert('Data: ' + data);   
            },
            error: function() {
               alert('Error');
            }   
         });
      });



});