 $(document).ready(function(){
            
            console.log('hey ready');
            
            
            var test = document.getElementById('test');
            var msgbox = document.getElementById('msgbox');
            var msgcenter = document.getElementById('msgcenter');
     
     
        sessiondata();
        getmsgs();
     
        function sessiondata(){
            
            $.ajax({
                    url:'../cont/user.php',
                    dataType:'JSON',
                    data:{
                        method:'getsession'
                    },
                    type:'POST',
                    success:function(sessionid){
                        console.log('sessionid is', sessionid);
                        $( "body" ).data( "uid", sessionid );
                        
                    },
                    error:function(sessionid){
                        console.log('sessionid', sessionid);

                    }
                });
        };

         function getmsgs(){
            
                //setInterval(function(){
       
                    $.ajax({
                        url:'../cont/messages.php',
                        dataType:'JSON',
                        data:{

                            method:'showmsg'
                        },
                        type:'POST',
                        success:function(smresp){
                            console.log('smresp is', smresp);

                            msgcenter.innerHTML = '';
                            
                            for(var i = 0; i < smresp.length; i++){


                                var wrap = document.createElement('div');
                                var sp = document.createElement('span');
                                var p = document.createElement('span');
                                var img = document.createElement('img');
                                var br = document.createElement('br');

                                img.src = smresp[i].avi;
                                img.className = 'smallavi';
                                sp.innerHTML = smresp[i].username + ": ";
                                sp.style.color = smresp[i].c;
                                p.innerHTML = smresp[i].msg;


                                wrap.appendChild(img);
                                wrap.appendChild(sp);
                                wrap.appendChild(p);

                                msgcenter.appendChild(wrap);
                                msgcenter.appendChild(br);


                            }

                    },
                    error:function(smresp){
                        console.log('smresp error', smresp);

                    }
                });

                //},

            //1000);
             
             
        }
             $( "#msgbox" ).on( "keydown", function( event ) {
                 
                 var which = event.which;
       
                 
                 if(which == 13){
                     
                     console.log('send ze message', $( "body" ).data( "uid" ));
                     
                    
                     $.ajax({
                        url:'../cont/messages.php',
                        dataType:'JSON',
                        data:{
                            msg:msgbox.value,
                            uid:$( "body" ).data( "uid" ),
                            method:'insertmsg'
                        },
                        type:'POST',
                        success:function(mresp){
                            console.log('mresp is', mresp);
                            
                            getmsgs();
                        },
                        error:function(mresp){
                            console.log('mresp error', mresp);

                        }
                    });
                    
                 }
                
            });

        });