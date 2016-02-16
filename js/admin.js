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
    showAllUsers();
    
    function showAllUsers(){
        
         $.ajax({
                    url:'../cont/user.php',
                    dataType:'JSON',
                    data:{
                        method:'showAllUsers'
                    },
                    type:'POST',
                    success:function(allUsers){
                        console.log('allUsers is', allUsers);
                        
                        for(var i = 0; i < allUsers.length; i++){
                            
                            var li = document.createElement('li');
                            var p = document.createElement('p');
                            p.innerHTML = allUsers[i].username;
                            
                            p.addEventListener('click', bindClick(i))
                                             
			
                            li.appendChild(p);
                            document.getElementById('listusers').appendChild(li);
                            
                            
                        }
                        
                        
                        function bindClick(i) {	
				            return function(){
                                console.log('clicked', i);
                                
                                
                                this.remove();
                                var inp  = document.createElement('input');
                                inp.value = allUsers[i].username;
                                li.appendChild(inp);
                                inp.onkeypress = function(e){
                                    console.log('key', e.keyCode);
                                };
                                
                                
                            }
                        }
                      
                    },
                    error:function(allUsers){
                        console.log('allUsers error', allUsers);

                    }
                });
        
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
     function objectSize(the_object) {
							  /* function to validate the existence of each key in the object to get the number of valid keys. */
					  var object_size = 0;
					  for (key in the_object){
						if (the_object.hasOwnProperty(key)) {
						  object_size++;
						}
					  }
					  return object_size;
				};

 });