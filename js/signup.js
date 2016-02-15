 $(document).ready(function(){  
        var un = document.getElementById('un');
            var avi = document.getElementById('avi');
            var c = document.getElementById('c');
            
            var subm = document.getElementById('subm');

            subm.onclick = function(){
                var status = $('input[name="status"]:checked').val();
                console.log('c is', c.value);
                console.log('status is', status);
                
                $.ajax({
                    url:'../cont/user.php',
                    dataType:'JSON',
                    data:{
                        un:un.value,
                        avi:avi.value,
                        status:status,
                        c:c.value,
                        method:'insert'
                    },
                    type:'POST',
                    success:function(resp){
                        console.log('resp is', resp);
                        
                        if(status == 1){
                            window.location = 'admin.html';
                        } else{
                            window.location = 'chat.html';
                        }
                    },
                    error:function(resp){
                        console.log('resp error', resp);

                    }
                });
               
            };
 });