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

    //show all users
    
    
    function showAllUsers(){
        
        
    };
    
    function showAllRooms (){
        
        $.ajax({
            url:'../cont/chatroom.php',
            dataType:'JSON',
            data:{
                method:'showAllRooms'
            },
            type:'POST',
            success:function(showrooms){
                
                console.log('showrooms', showrooms);
                
                
                /*
                for (i=0;1<rooms.length;i++){
                    var p = document.createElement(p);
                    p.innerHTML="chat name"+rooms[i].name+""
                    //can you left join all user to the room
                    document.body.appendChild(listi);       
                }
                */
            },
            error:function(showrooms){
                console.log("showroom Error", showrooms);

            }
        });
        
    };
 
    
    
    function insertRoom (){
        
        $.ajax({
            url:'../cont/chatroom.php',
            dataType:'JSON',
            data:{
                method:'insertRoom',
                chat:"hi",
                name:"id1",
                recipient:"id2"
                
            },
            type:'POST',
            success:function(newroom){
               console.log("newroom", newroom);
            },
            error:function(sessionid){
                console.log("newroom Error", newroom);

            }
        });
    };
     

 });