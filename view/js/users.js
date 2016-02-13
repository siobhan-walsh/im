$(document).ready(function(){
    
    console.log('hey console');
    
    var un = document.getElementById('un');
    var pw = document.getElementById('pw');
    var email = document.getElementById('email');
    var avi = document.getElementById('avi');
    
    var signup = document.getElementById('signup');
    
    
    signup.onclick = function(){
      
        $.ajax({
            url: "../cont/users.php",
            type: "POST",
            dataType: "JSON",
            data: {
                method: 'insert_user',
                un: un.value,
                pw: pw.value,
                status: 1,
                email: email.value,
                avi: avi.value
            
            },
            success: function(resp) {
                console.log("resp is ", resp);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("resp error", textStatus);
            }
    });
        
    }
    
});