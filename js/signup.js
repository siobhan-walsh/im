 $(document).ready(function(){  
            var un = document.getElementById('un');
            var pw = document.getElementById('pw');
            var email = document.getElementById('email');
            var avi = document.getElementById('avi');
            var c = document.getElementById('c');
            
            var subm = document.getElementById('subm');

            subm.onclick = function(){
                var status = $('input[name="status"]:checked').val();
                console.log('c is', c.value);
                console.log('status is', status);
                
                email = email.value;
                
                $.ajax({
                    url:'../cont/user.php',
                    dataType:'JSON',
                    data:{
                        un:un.value,
                        pw:pw.value,
                        avi:avi.value,
                        status:status,
                        c:c.value,
                        email:email,
                        method:'insert'
                    },
                    type:'POST',
                    success:function(resp){
                        console.log('resp is', resp);
                        
                        if(resp.account == 'hasaccount'){
                            console.log('you already have an account bro');
                            
                            alert('you already have an account with that email');
                        } else {
                            console.log('ok thne new account');
                            
                        
                            $.ajax({
                                url:'../cont/user.php',
                                dataType:'JSON',
                                data:{
                                    email:email,
                                    method:'getUser'
                                },
                                type:'POST',
                                success:function(sessresp){
                                    
                                    console.log('sessresp', sessresp);
                                    
                                    if(status == 1){
                                        window.location = 'admin.html';
                                    } else{
                                        window.location = 'chat.html';
                                    }
                            
                                    
                                },
                                error:function(sessresp){
                                    console.log('sessresperr', sessresp);
                                }
                            
                                     
                            });
                        
                        }
                    },
                    error:function(resp){
                        console.log('resp error', resp);

                    }
                });
               
            };
 });