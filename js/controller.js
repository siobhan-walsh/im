var ctrl = angular.module('allctrls', []);

ctrl.controller('headerCtrl', ['$scope', function($scope){
    
    console.log('head');

        $.ajax({
            url:'./cont/user.php',
            dataType:'JSON',
            data:{
                method:'getsession'
            },
            type:'POST',
            success:function(sessinfo){

                console.log('sessinfo', sessinfo);
                
                $scope.$apply(function(){
                        $scope.info = sessinfo;
                 });

            },
            error:function(sessinfo){
                console.log('sessinfo', sessinfo);
            }


        });
    
    
        $scope.menuops = function(){
            
            
            
        }
}]);

ctrl.controller('chatroomCtrl', ['$scope', function($scope){

                $scope.hideinp = true;
                
                $scope.showinp = function(){
                    
                    console.log('wow you clicked that h1', $scope.inp);
                    $scope.hideinp = true;
                    
                   } 
                
                $scope.add = function(){
                    
                    console.log('hi', $scope.inp);
                    
                    if($scope.inp == undefined || $scope.inp == ''){
                        
                        console.log('no name');
                        
                    } else {
                        
                        $.ajax({
                            url:'./cont/chatroom.php',
                            dataType:'JSON',
                            data:{
                                method:'insertRoom',
                                name:$scope.inp
                            },
                            type:'POST',
                            success:function(crresp){

                            },
                            error:function(crresp){
                                console.log('crresp error', crresp);

                            }
                        });
                        
                    }
                    
                };
              
}]);

ctrl.controller('adminSignupCtrl', ['$scope', function($scope){
    
    
     var un = document.getElementById('un');
            var pw = document.getElementById('pw');
            var email = document.getElementById('email');
            var avi = './img/default/admin-avi-default.jpg';
            var c = '#772457';
            
            var subm = document.getElementById('subm');

            subm.onclick = function(){
                var status = 1;
                
                email = email.value;
                
                $.ajax({
                    url:'./cont/user.php',
                    dataType:'JSON',
                    data:{
                        un:un.value,
                        pw:pw.value,
                        avi:avi,
                        status:status,
                        c:c,
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
                                url:'./cont/user.php',
                                dataType:'JSON',
                                data:{
                                    email:email,
                                    method:'getUser'
                                },
                                type:'POST',
                                success:function(sessresp){
                                    
                                    console.log('sessresp', sessresp);
                                    
                                    if(status == 1){
                                        window.location = '#/dashboard'
                                    } else{
                                        
                                        console.log('hmm', sessresp);
                                        //window.location = '#/signup';
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
    
}]);
         

ctrl.controller('profileCtrl', ['$scope', function($scope){
    
    
  
    sessiondata();
    
    
    $scope.updateAvi = function($event){
        
        var upload = document.getElementById('upload');
        var files = document.getElementById('filesinp');
        var sess = $scope.info.user_id;
        
        
        console.log('hi');
        $event.preventDefault();
        
        //upload the files here using another form of ajax
      
        var formData = new FormData();
        var allfiles = files.files;
        console.log('files', allfiles);
        var xhr = new XMLHttpRequest();
        
        for(var i =0; i < allfiles.length; i++){
            
            var e_file = allfiles[i];
            
           
            if(!e_file.type.match('image/*')){
                console.log('not an image file');
                return false;
            }
            
            
            formData.append('images[]', e_file, e_file.name);
            formData.append('message', 'my post message');
            formData.append('userid', sess);
            
            xhr.open('POST', './model/imgupload.php', true);
            xhr.onload = function(){
                
                if(xhr.status == 200){
                    console.log('loaded properly');
                   
                }
                
            };
            
            xhr.send(formData);
        };
     
    };
   

    function sessiondata(){

        $.ajax({
            url:'cont/user.php',
            dataType:'JSON',
            data:{
                method:'getsession',
            },
            type:'POST',
            success:function(sessionid){
                
                console.log('sessionid', sessionid);
                
                $scope.$apply(function(){
                        $scope.info = sessionid;
                 });
                
                
                
                
                /*
                
                var textbox = false;
                //var inputh3 = document.createElement("input");
                var div1 = document.createElement("div");
                div1.className='box';
                
                var div2 = document.createElement("div");
                div2.className='box';
                var div = document.createElement("div");
                var h3 = document.createElement("h3");
                h3.className="boxclick";
                h3.innerHTML=sessionid.name;
                var p = document.createElement("p");
                p.className="boxclick";
                p.innerHTML=sessionid.email;
                var but = document.createElement("button");
                but.innerHTML="update";
                var color = document.createElement("input");
                color.type = "color";
                
                var img = document.createElement('img');
                
                
                color.nodeValue = sessionid.c;
                div1.appendChild(h3);
                div2.appendChild(p);
                div.appendChild(color);
                div.appendChild(div1);
                div.appendChild(div2);
                div.appendChild(but);
                $(".content").append(div);
                
                $('.boxclick').click(function(){  
                    
                        var inputh3 = document.createElement("input");
                        var textbox = true;
                        inputh3.id = "inputh3";
                        inputh3.value = this.innerHTML;
                        this.parentNode.appendChild(inputh3);
                        textbox=true;
                        
                });
                */   
            },
            error:function(sessionid){
                console.log('sessionid', sessionid);
                

            }
        });
    };
    
    
    
    
           $scope.logout = function(){

               $.ajax({
                    url:'cont/user.php',
                    dataType:'JSON',
                    data:{
                        method:'logout',
                    },
                    type:'POST',
                    success:function(logoutresp){

                        console.log('logoutresp', logoutresp);

                        $scope.$apply(function(){
                                $scope.logoutresp = logoutresp;
                         });

                    },
                    error:function(logoutresp){
                        console.log('logoutresp error', logoutresp);


                    }
                });


           }
   
    /*
    
    
    
     for next week
    
        users have to be able to login, and put up something (imgs, messages, etc)
        update user information
        
      
    
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
    
    
    
    
    */
    
    //show profile pic 
    
    
    
    
    
}]);

ctrl.controller('adminSignupCtrl', ['$scope', function($scope){
    
    
     var un = document.getElementById('un');
            var pw = document.getElementById('pw');
            var email = document.getElementById('email');
            var avi = './img/default/admin-avi-default.jpg';
            var c = '#772457';
            
            var subm = document.getElementById('subm');

            subm.onclick = function(){
                var status = 1;
                
                email = email.value;
                
                $.ajax({
                    url:'./cont/user.php',
                    dataType:'JSON',
                    data:{
                        un:un.value,
                        pw:pw.value,
                        avi:avi,
                        status:status,
                        c:c,
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
                                url:'./cont/user.php',
                                dataType:'JSON',
                                data:{
                                    email:email,
                                    method:'getUser'
                                },
                                type:'POST',
                                success:function(sessresp){
                                    
                                    console.log('sessresp', sessresp);
                                    
                                    if(status == 1){
                                        window.location = '#/dashboard'
                                    } else{
                                        
                                        console.log('hmm', sessresp);
                                        //window.location = '#/signup';
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
    
}]);

ctrl.controller('chatCtrl', ['$scope', function($scope){
  console.log('hey ready');
            
            
            var test = document.getElementById('test');
            var msgbox = document.getElementById('msgbox');
            var msgcenter = document.getElementById('msgcenter');
     
     
        sessiondata();
        getmsgs();
     
        function sessiondata(){
            
            $.ajax({
                    url:'./cont/user.php',
                    dataType:'JSON',
                    data:{
                        method:'getsession'
                    },
                    type:'POST',
                    success:function(sessionid){
                        console.log('sessionid is', sessionid);
                        $( "body" ).data( "uid", sessionid.user_id );
                        
                    },
                    error:function(sessionid){
                        console.log('sessionid', sessionid);
                    }
                });
        };

         function getmsgs(){
            
                //setInterval(function(){
       
                    $.ajax({
                        url:'./cont/messages.php',
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
                        url:'./cont/messages.php',
                        dataType:'JSON',
                        data:{
                            msg:msgbox.value,
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

                
}]);
                


ctrl.controller('userlist', ["$scope", function($scope){
                
                $scope.hidden = true;
                $scope.showmore = true;
                $scope.getUsers = function(){
                  
                    $.ajax({
                        url:'./cont/user.php',
                        dataType:'JSON',
                        data:{
                            method:'showAllUsers'
                        },
                        type:'POST',
                        success:function(allUsers){
                            console.log('allUsers is', allUsers);
                            
                            $scope.$apply(function(){
                                
                                $scope.allUsers = allUsers;
                                $scope.hidden = false;
                                
                            });
                            
                            
                            $scope.moreinfo = function(){
                                $scope.showmore = false;
                            };

                          

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
                
                
  
                    
             }]);
