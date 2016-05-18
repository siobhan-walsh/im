var ctrl = angular.module('allctrls', []);

ctrl.controller('headerCtrl', ['$scope', function($scope){
    
    Storage.prototype.setObject = function(key, value) {

        this.setItem(key, JSON.stringify(value));

    }

    Storage.prototype.getObject = function(key) {

        var value = this.getItem(key);
        return value && JSON.parse(value);
    }

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
                sessionStorage.setObject('userinfo', sessinfo);
                console.log('html5 sto', sessionStorage.getObject('userinfo'));

            },
            error:function(sessinfo){
                console.log('sessinfo', sessinfo);
            }


        });
    
    
        $scope.menuops = function(){
           
        }

}]);

ctrl.controller('signupCtrl', ['$scope', function($scope){
    
   console.log('signup');
    
     
            var un = document.getElementById('un');
            var pw = document.getElementById('pw');
            var email = document.getElementById('email');
            var avi = './img/default/avi-default.jpg';
            var c = '#772457';
            var status = 2;
            
            var subm = document.getElementById('subm');
            var showadmin = document.getElementById('showadmin');
            
            showadmin.onclick = function(){
                var div = document.createElement('div');
                var button = document.createElement('button');
                var p = document.createElement('p');
                var inp = document.createElement('input');
                inp.type = 'password';
                
                p.innerHTML = 'Please Enter the admin password';
                
                button.innerHTML = 'Signup';
                button.addEventListener('click', function(){
                    verify();
                });
                div.id = 'adminpopup';
                div.style.position ='fixed';
                div.style.width = '70vw';
                div.style.padding = '5vw';
                div.style.backgroundColor = 'rgba(0, 0, 0, 1)'
                div.style.color = '#fff';
                div.style.left = '10vw';
                div.style.top = '10vh';
                div.appendChild(p);
                div.appendChild(inp);
                div.appendChild(button);
                document.body.appendChild(div);
                
                function verify(){
                    var entered = inp.value;
                    var actual = 'secretvevoadmin';
                    
                    if(entered == actual){
                       
                        status = 1;
                        avi = './img/default/admin-avi-default.jpg';
                        signup();
                    } else {
                        p.innerHTML = "Sorry, that is not the right password";
                    }
                }
                
            }

            subm.onclick = function(){
                signup();
               
            };

    function signup(){
                               
             
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
                                    pw:pw.value,
                                    method:'login'
                                },
                                type:'POST',
                                success:function(sessresp){
                                    
                                    console.log('sessresp', sessresp);
                                
                                    if(status == 1){
                                        sessionStorage.setObject('userinfo', sessresp);
                                        document.getElementById('adminpopup').remove();
                                        window.location = '#/admin'
                                    } else{
                                       
                                        window.location = '#/signup';
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
ctrl.controller('loginCtrl', ['$scope', function($scope){

            var email = document.getElementById('email');
            var pw = document.getElementById('pw');
            var subm = document.getElementById('subm');
            
            var userinfo = sessionStorage.getObject('userinfo');
               
                if(userinfo.status == 1){
                    window.location = '#/admin'
                } else if (userinfo.status == 2) {
                    window.location = '#/mychats';
                } else {
                    $scope.login = function(){
              
                    $.ajax({
                        url:'./cont/user.php',
                        dataType:'JSON',
                        data:{
                            email:email.value,
                            pw:pw.value,
                            method:'login'
                        },
                        type:'POST',
                        success:function(lresp){
                            console.log('lresp is', lresp);
                            sessionStorage.setObject('userinfo', lresp);
                            
                            if(lresp == "user not found"){

                                console.log('it is null');
                                $('#error').html('Sorry, that is the wrong username or password');
                            } else {
                                console.log('yes we found them');

                                if(lresp.status == 1){
                                    console.log('go to admin page');
                                    window.location = '#/admin';
                                } else {
                                    window.location = '#/mychats';
                                }
                            }
                        },
                        error:function(lresp){
                            console.log('lresp error', lresp);

                        }
                    });

                };
                    
            }
            
  
}]);

ctrl.controller('newchatCtrl', ['$scope', function($scope){
        console.log('newchat');
        var userinfo =  sessionStorage.getObject('userinfo');

        if(userinfo.status != 1){
            $('.restricted').remove();
            $('.message').html('You do not have permission to view this page');
        } else {
          
                $scope.add = function(){
                    
                    var inpval = document.getElementById('crname').value;
                    var checks = document.querySelectorAll('.check:checked');
                    
                    console.log('hi', inpval);
                    
                    if(inpval == undefined || inpval == ''){
                        
                        console.log('no name');
                        
                    } else {
                        
                        $.ajax({
                            url:'./cont/chatroom.php',
                            dataType:'JSON',
                            data:{
                                method:'insertRoom',
                                name:inpval
                            },
                            type:'POST',
                            success:function(crresp){
                                console.log('crresp is', crresp);
                                
                                if(crresp == 'fail'){
                                    console.log('fail');
                                    
                                } else {
                                    var crid = crresp.chatroom_id;
                                    console.log('crid', crid);
                                    
                                      console.log('checks' , checks);
                                    
                                    for(var i = 0; i < checks.length; i++){
                                      
                                        $.ajax({
                                            url:'./cont/chatroom.php',
                                            dataType:'JSON',
                                            data:{
                                                method:'addUserToRoom',
                                                crid:crid,
                                            userid:checks[i].getAttribute('data-userid')
                                            },
                                            type:'POST',
                                            success:function(useraddresp){
                                                console.log('useraddresp', useraddresp);
                                                var div = document.createElement('div');
                                                var button = document.createElement('button');
                                                var p = document.createElement('p');
                                                p.innerHTML = 'Chatroom created!';
                                                button.innerHTML = 'View my chatrooms';
                                                button.addEventListener('click', function(){div.remove(); window.location = '#/mychats';});
                                                div.style.position ='fixed';
                                                div.style.width = '40vw';
                                                div.style.padding = '5vw';
                                                div.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
                                                div.style.color = '#fff';
                                                div.style.left = '30vw';
                                                div.style.top = '10vh';
                                                div.appendChild(p);
                                                div.appendChild(button);
                                                document.body.appendChild(div);
                                                
                                            }, error:function(useraddresp){
                                                console.log('error useraddresp', useraddresp);
                                            }
                                        });
                                       
                                    }
                                }
                            },
                            error:function(crresp){
                                console.log('crresp error', crresp);

                            }
                        });
                        
                    }
                    
                };
            
             $scope.hidden = true;
            $scope.showmore = true;
          
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


                    },
                    error:function(allUsers){
                        console.log('allUsers error', allUsers);

                    }
                });
        }
  
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
                    location.reload(); 
                   
                }
                
            };
            
            xhr.send(formData);
        };
     
    };
    
    $scope.showInp = function($event){
       
        var thiss = $event.target;

        thiss.style.display = 'none';

        
        var thisinp = document.querySelector('h3 + input');
        
        thisinp.style.display = 'block';
         
    };
    
    $scope.showH = function($event){
       
        var thiss = $event.target;

        thiss.style.display = 'none';

        
        var thish = document.querySelector('#hname');
        
        thish.innerHTML = thiss.value;
        thish.style.display = 'block';
         
    };
    
    $scope.showeInp = function($event){
       
        var thiss = $event.target;

        thiss.style.display = 'none';

        
        var thisinp = document.querySelector('#email');
        
        thisinp.style.display = 'block';
         
    };
    
    $scope.showP = function($event){
       
        var thiss = $event.target;

        thiss.style.display = 'none';

        
        var thish = document.querySelector('#pemail');
        
        thish.innerHTML = thiss.value;
        thish.style.display = 'block';
         
    };
    
    $scope.update = function($event){
        
        var un = document.getElementById('un').value;
        var email = document.getElementById('email').value;
        
        
         $.ajax({
            url:'./cont/user.php',
            dataType:'JSON',
            data:{
                un:un,
                email:email,
                method:'updateUser'
            },
            type:'POST',
            success:function(unup){
                console.log('unup', unup);
            },
            error:function(unup){
                console.log('unup error', unup);
            }
         });
    
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
                        
                        window.location = '/#/';

                    },
                    error:function(logoutresp){
                        console.log('logoutresp error', logoutresp);


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
                        if(sessionid.status==1){
                            $(".admip").show();
                            /*lahiru*/
                            
                            var size = ["contain",
                                        "auto",
                                        "cover"];

                            var ali = ["top left",
                                       "top center",
                                       "top right",
                                       "center left",
                                       "center center",
                                       "center right",
                                       "bottom left",
                                       "bottom center",
                                       "bottom right"];

                                //background

                                $("#imgadd").click(function(){
                                    $("#canvas").css({backgroundImage : "url("+$("#imgurl").val()+")"});
                                });

                                $("#sizeS").change(function(){
                                    $("#canvas").css({backgroundSize : 25+(parseFloat($("#sizeS").val()*2))+"%"})
                                })

                                $("#size").change(function(){
                                    $("#canvas").css({backgroundSize : size[$(".size:checked").val()]})
                                    console.log($(".size:checked").val())
                                })

                                $(".alignment").change(function(){
                                    $("#canvas").css({backgroundPosition : ali[$(".alignmentO:checked").val()]})
                                    console.log($(".alignmentO:checked").val())
                                })

                                //head

                                $("#headb").click(function(){
                                    $(".imghead").html($("#headt").val());
                                });

                                $("#heads").change(function(){
                                    $(".imghead").css({fontSize : 16+(parseFloat($("#heads").val()))+"px"})
                                })

                                $("#headc").change(function(){
                                    console.log($("#headc").val())
                                    $(".imghead").css({color : ""+$("#headc").val()+""})
                                })

                                //foot

                                $("#footb").click(function(){
                                    $(".imgfoot").html($("#foott").val());
                                });

                                $("#foots").change(function(){
                                    $(".imgfoot").css({fontSize : 16+(parseFloat($("#foots").val()))+"px"})
                                })

                                $("#footc").change(function(){
                                    console.log($("#footc").val())
                                    $(".imgfoot").css({color : ""+$("#footc").val()+""})
                                });
                        }
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



ctrl.controller('adminCtrl', ['$scope', function($scope){
    
    console.log('na na na nana', sessionStorage.getObject('userinfo'));
    var userinfo =  sessionStorage.getObject('userinfo');
    
    if(userinfo.status != 1){
        $('.restricted').remove();
        $('.message').html('You do not have permission to view this page');
    } else {
        
    }
       
          
  
}]);
