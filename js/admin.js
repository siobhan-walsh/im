 $(document).ready(function(){
            
            console.log('hey admin ready');
            
     /*
     
     use the sessiondata function first to get the userid, then 
     you can just use $( "body" ).data( "uid"); for any functions that need the userid
     */
     
     sessiondata();
     
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
            
        });