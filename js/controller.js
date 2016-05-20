var ctrl = angular.module('allctrls', []);

ctrl.controller('headerCtrl', ['$scope', function($scope){
    
    Storage.prototype.setObject = function(key, value) {
        this.setItem(key, JSON.stringify(value));
    }

    Storage.prototype.getObject = function(key) {
        var value = this.getItem(key);
        return value && JSON.parse(value);
    }

        $.ajax({
            url:'./cont/user.php',
            dataType:'JSON',
            data:{
                method:'getsession'
            },
            type:'POST',
            success:function(sessinfo){
                sessionStorage.setObject('userinfo', sessinfo);
              //  console.log('html5 sto', sessionStorage.getObject('userinfo'));
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
            var c = document.getElementById('c');
            var status = 2;
            
            document.getElementById('bigheader').style.display = 'block';
            document.getElementById('adminheader').style.display = 'none';
            document.getElementById('customerheader').style.display = 'none';
    
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
                c = c.value;
                
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
                      //  console.log('resp is', resp);
                        
                        if(resp.account == 'hasaccount'){
                    
                            
                            alert('you already have an account with that email');
                        } else {
                 
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
                                    
                                  //  console.log('sessresp', sessresp);
                                
                                    if(status == 1){
                                        sessionStorage.setObject('userinfo', sessresp);
                                        document.getElementById('adminpopup').remove();
                                        window.location = '#/admin'
                                    } else{
                                       
                                        window.location = '#/mychats';
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
ctrl.controller('viewusersCtrl', ['$scope', function($scope){
    document.getElementById('bigheader').style.display = 'none';
            document.getElementById('adminheader').style.display = 'block';
            document.getElementById('customerheader').style.display = 'none';
    $.ajax({
        url:'./cont/user.php',
        dataType:'JSON',
        data:{
            method:'showAllUsers'
        },
        type:'POST',
        success:function(alluser){
            
          //  console.log('alluser', alluser);
           for(x=0;x<alluser.length;x++){
               var div = document.createElement("div");
               var br = document.createElement("br");
               var br2 = document.createElement("br");
               var h = document.createElement("h5");
               var e = document.createElement('h5');
               var inp = document.createElement('input');
               var inp2 = document.createElement('input');
               var but = document.createElement("button");
               var but2 = document.createElement("button");
               
             
               div.dataset.id = alluser[x].user_id;
               
               h.innerHTML=alluser[x].username
               h.style.color=alluser[x].c
               
               e.innerHTML = alluser[x].email;
               inp.placeholder = 'new username';
               inp2.placeholder = 'new email';
               
               inp.id = 'u' + alluser[x].user_id;
               inp2.id = 'e' + alluser[x].user_id;
               inp2.type = 'email';
              
               but.innerHTML = "Delete User"
               but.dataset.id = alluser[x].user_id;
               but.onclick = function(){deleteuser(this)}
               
               but2.innerHTML = "Update User"
               but2.dataset.id = alluser[x].user_id;
               but2.onclick = function(){updateuser(this)}
               
               div.appendChild(h)
              
               
               div.appendChild(e);
                div.appendChild(br2);
                div.appendChild(inp);
               div.appendChild(inp2);
               div.appendChild(but2);
               div.appendChild(but)
               $("#content").append(div)
               $("#content").append(br)
         
           }         
        },
        error:function(allUsers){
            console.log('allUsers error', allUsers);

        }
    });
    
    function updateuser(uid){
        
     
        var thisid = uid.dataset.id
   
         $.ajax({
            url:'./cont/user.php',
            dataType:'JSON',
            data:{
                un:$('#u' + thisid).val(),
                email:$('#e' + thisid).val(),
                method:'updateUser'
            },
            type:'POST',
            success:function(unup){
         //       console.log('unup', unup);
                location.reload();
            },
            error:function(unup){
                console.log('unup error', unup);
            }
         });
    
    };
    function deleteuser(rr){
    
        $.ajax({
            url:'./cont/user.php',
            dataType:'JSON',
            data:{
                uid:rr.dataset.id,
                method:'deleteUser'
            },
            type:'POST',
            success:function(lresp){
       //             console.log('lresp', lresp);
                location.reload();
            },
            error:function(lresp){
                console.log('error', lresp);
            }
        });
    }
  
}]);


ctrl.controller('viewcrCtrl', ['$scope', function($scope){
    document.getElementById('bigheader').style.display = 'none';
            document.getElementById('adminheader').style.display = 'block';
            document.getElementById('customerheader').style.display = 'none';
    $.ajax({
        url:'./cont/chatroom.php',
        dataType:'JSON',
        data:{
            method:'showAllChatrooms'
        },
        type:'POST',
        success:function(allcr){
            
   //         console.log('allcr', allcr);
            if(allcr == ''){
                $('#chatrooms').append('<p>There are no chatrooms</p>');
            }
            
           for(x=0;x<allcr.length;x++){
               var div = document.createElement("div");
               var br = document.createElement("br");
               var h = document.createElement("h5");
               var inp = document.createElement('input');
               var but = document.createElement("button");
               var but2 = document.createElement("button");
         
               div.dataset.id = allcr[x].chatroom_id;
               
               h.innerHTML=allcr[x].name;
               h.style.color=allcr[x].c;
               
               inp.placeholder = 'new chatroom name';
                inp.id = 'cr' + allcr[x].chatroom_id;
            
               but.innerHTML = "Delete Chatroom"
               but.dataset.id = allcr[x].chatroom_id;
               but.onclick = function(){deletecr(this)}
               
               but2.innerHTML = "Update Chatroom"
               but2.dataset.id = allcr[x].chatroom_id;
               but2.onclick = function(){updatecr(this)}
               
               div.appendChild(h)
             
                div.appendChild(inp);
               div.appendChild(but2);
                 div.appendChild(but)
               $("#chatrooms").append(div)
               $("#chatrooms").append(br)
            
           }         
        },
        error:function(allcr){
            console.log('allcr error', allcr);

        }
    });
        function updatecr(cr){
        
   //     console.log('this', cr.dataset.id);
        var thisid = cr.dataset.id
       var name = $('#cr' + thisid).val();
         
         $.ajax({
            url:'./cont/chatroom.php',
            dataType:'JSON',
            data:{
                crid:thisid,
                name:$('#cr' + thisid).val(),
                method:'updateChatroom'
            },
            type:'POST',
            success:function(unup){
         //       console.log('unup', unup);
                location.reload();
            },
            error:function(unup){
                console.log('unup error', unup);
            }
         });
    
    };
    
    function deletecr(rr){
      
        $.ajax({
            url:'./cont/chatroom.php',
            dataType:'JSON',
            data:{
                crid:rr.dataset.id,
                method:'deleteChatroom'
            },
            type:'POST',
            success:function(lresp){
                    console.log('lresp', lresp);
                location.reload();
            },
            error:function(lresp){
                console.log('error', lresp);
            }
        });
    }
  
}]);

ctrl.controller('loginCtrl', ['$scope', function($scope){

            var email = document.getElementById('email');
            var pw = document.getElementById('pw');
            var subm = document.getElementById('subm');
            
            document.getElementById('bigheader').style.display = 'block';
            document.getElementById('adminheader').style.display = 'none';
            document.getElementById('customerheader').style.display = 'none';
      
            var userinfo = sessionStorage.getObject('userinfo');
            if(userinfo == null){
                sessionStorage.setObject('userinfo', 'nouser');
                userinfo = sessionStorage.getObject('userinfo');
            }
    
        $scope.login = function(){
               if(userinfo == 'nouser'){
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
                      //      console.log('lresp is', lresp);
                            sessionStorage.setObject('userinfo', lresp);    
                            
                            if(lresp == "user not found"){

                                $('#error').html('Sorry, that is the wrong email or password');
                            } else {
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
               } else {
                   if(userinfo.status == 1){
                       window.location = '#/admin';
                    } else if (userinfo.status == 2) {
                        window.location = '#/mychats';
                    }
               }
    };
          
}]);

ctrl.controller('newchatroomCtrl', ['$scope', function($scope){
    
        var userinfo =  sessionStorage.getObject('userinfo');

        if(userinfo.status != 1){
            $('.restricted').remove();
            $('.message').html('You do not have permission to view this page');
           
        } else {
           document.getElementById('bigheader').style.display = 'none';
            document.getElementById('adminheader').style.display = 'block';
            document.getElementById('customerheader').style.display = 'none';
            
                $scope.add = function(){
                    
                    var inpval = document.getElementById('crname').value;
                    var checks = document.querySelectorAll('.check:checked');
                
                    if(inpval == undefined || inpval == ''){
                        
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
                  //              console.log('crresp is', crresp);
                                
                                if(crresp == 'fail'){
                                
                                } else {
                                    var crid = crresp.chatroom_id;
                                    
                                    $.ajax({
                                            url:'./cont/chatroom.php',
                                            dataType:'JSON',
                                            data:{
                                                method:'addUserToRoom',
                                                crid:crid,
                                                userid:userinfo.user_id
                                            },
                                            type:'POST', 
                                            success:function(thisuseraddresp){
                                          //      console.log('thisuseraddresp', thisuseraddresp);
                                               
                                            }, 
                                            error:function(thisuseraddresp){
                                                console.log('error thisuseraddresp', thisuseraddresp);
                                            }
                                        });
                                    
                                    for(var i = 0; i < checks.length; i++){
                                        
                                        if(checks[i].getAttribute('data-userid') == userinfo.user_id){
                                            
                                        } else {
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
                                     //               console.log('useraddresp', useraddresp);

                                                }, error:function(useraddresp){
                                                    console.log('error useraddresp', useraddresp);
                                                }
                                            });
                                       
                                        }
                                      
                                        
                                    }
                                    var div = document.createElement('div');
                                    var button = document.createElement('button');
                                    var p = document.createElement('p');
                                    p.innerHTML = 'Chatroom created!';
                                    button.innerHTML = 'View my chatrooms';
                                    button.addEventListener('click', function(){
                                        document.getElementById('confirmpop').remove(); 
                                        window.location = '#/mychats';
                                    });
                                    div.id = 'confirmpop'
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
                                                
                                }
                            },
                            error:function(crresp){
                                console.log('crresp error', crresp);

                            }
                        });
                        
                    }
                    
                };
        
                $.ajax({
                    url:'./cont/user.php',
                    dataType:'JSON',
                    data:{
                        method:'showAllUsers'
                    },
                    type:'POST',
                    success:function(allUsers){
                     //   console.log('allUsers is', allUsers);

                        $scope.$apply(function(){

                            $scope.allUsers = allUsers;
                          

                        });


                    },
                    error:function(allUsers){
                        console.log('allUsers error', allUsers);

                    }
                });
        }
  
}]);
ctrl.controller('profileCtrl', ['$scope', function($scope){
    sessiondata();
    
    if(sessionStorage.getObject("userinfo").status == 1){
        document.getElementById('bigheader').style.display = 'none';
        document.getElementById('adminheader').style.display = 'block';
        document.getElementById('customerheader').style.display = 'none';
    } else {
            document.getElementById('bigheader').style.display = 'none';
            document.getElementById('adminheader').style.display = 'none';
            document.getElementById('customerheader').style.display = 'block';
    }
    
    
    $scope.updateAvi = function($event){
        
        var upload = document.getElementById('upload');
        var files = document.getElementById('filesinp');
        var sess = $scope.info.user_id;
        
        
     
        $event.preventDefault();
      
        var formData = new FormData();
        var allfiles = files.files;
        console.log('files', allfiles);
        var xhr = new XMLHttpRequest();
        
        for(var i =0; i < allfiles.length; i++){
            
            var e_file = allfiles[i];
            
           
            if(!e_file.type.match('image/*')){
               
                return false;
            }
            
            
            formData.append('images[]', e_file, e_file.name);
            formData.append('message', 'my post message');
            formData.append('userid', sess);
            
            xhr.open('POST', './model/aviupload.php', true);
            xhr.onload = function(){
                
                if(xhr.status == 200){
                  
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
         //       console.log('unup', unup);
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
                
             //   console.log('sessionid', sessionid);
                
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

                      
                         sessionStorage.setObject('userinfo', 'nouser');
                       window.location.reload(true);

                        $scope.$apply(function(){
                                $scope.logoutresp = logoutresp;
                         });
                        
                        window.location = '#/';

                    },
                    error:function(logoutresp){
                        console.log('logoutresp error', logoutresp);


                    }
                });


           };

}]);

ctrl.controller('chatCtrl', ['$scope', '$routeParams', '$interval',  function($scope, $routeParams, $interval){
 
   
    if(sessionStorage.getObject("userinfo").status == 1){
        document.getElementById('bigheader').style.display = 'none';
        document.getElementById('adminheader').style.display = 'block';
        document.getElementById('customerheader').style.display = 'none';
    } else {
            document.getElementById('bigheader').style.display = 'none';
            document.getElementById('adminheader').style.display = 'none';
            document.getElementById('customerheader').style.display = 'block';
    }
    
    var currentId = $routeParams.id;
    
    var crid =  currentId.slice(15);
    
   var userinfo = sessionStorage.getObject('userinfo');
   
            var test = document.getElementById('test');
            var msgbox = document.getElementById('msgbox');
            var msgcenter = document.getElementById('msgcenter');
     
     
        getmsgs();
    
       if(userinfo.status==1){
           document.getElementById('chatctrls').style.display = 'block';
             document.getElementById('meme').style.display = 'block';
          
           
           $('#meme').click(function(){
              $(".admip").fadeIn();
             
           });
           $('#exitpopup').click(function(){
              $(".admip").fadeOut();
           });

     
                            
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
                                
                                $("#framb").click(function(){
                                   $("#canvas").prepend("<iframe src='https://www.youtube.com/embed/"+$("#framt").val()+"' class='fraim'</iframe>") 
                                });
           
            $scope.uploadImg = function($event){
                var upload = document.getElementById('upload');
                var files = document.getElementById('filesinp');
                var sess = userinfo.user_id;

                $event.preventDefault();


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
                          
                            var path = xhr.responseText;
                            
                            $("#canvas").css({backgroundImage : "url("+path+")"});
                        }

                    };

                    xhr.send(formData);
                };

            };
        }
         
            $scope.submitpost = function($event){
                var canvas = document.getElementById("canvas");
                $('.admip').fadeOut();
                canvas.removeAttribute("id");
                canvas.className = "canvas"
                console.log($("#perantC").html());
                $.ajax({
                        url:'./cont/messages.php',
                        dataType:'JSON',
                        data:{
                            msg:$("#canvasP").html(),
                            method:'insertpost',
                            crid:crid
                        },
                        type:'POST',
                        success:function(mresp){
                     //       console.log('mresp is', mresp);
                            canvas.removeAttribute("class");
                            canvas.id="canvas"
                            getmsgs();
                            $("#msgbox").val("");
                        },
                        error:function(mresp){
                            console.log('mresp error', mresp);

                        }
                    });
            }; 
    
   
     $interval(getmsgs, 10000);
         function getmsgs(){
          
             var element = document.getElementById("msgcenter");
                        element.scrollTop = element.scrollHeight;
         
       
                    $.ajax({
                        url:'./cont/messages.php',
                        dataType:'JSON',
                        data:{
                            method:'showMsgsFromChatRoom',
                            crid:crid
                          
                        },
                        type:'POST',
                        success:function(smresp){
                          //  console.log('smresp is', smresp);
                            document.getElementById("msgcenter").innerHTML="";
                            $scope.userinfo = userinfo;
                            for(var i=0;i<smresp.length;i++){
                                var div1 = document.createElement("div");
                                var div2 = document.createElement("div");
                                
                                document.getElementById("msgcenter").appendChild(div1);
                                
                                    if(userinfo.user_id == smresp[i].user_id){
                                       div2.innerHTML="<img class='smallavi' style = 'float:right;' src='"+smresp[i].avi+"'><span style='color:"+smresp[i].c+"; margin:16px 0; float:right; font-size:12pt; '>"+smresp[i].username+"</span>"+"<div style='float:right; clear:both; margin:0 70px;padding:0 4%; color:rgba(17,36,66,0.6)'>" + smresp[i].msg + "</div>";
                                        
                                    }
                                    else{
                                       div2.innerHTML="<img class='smallavi' src='"+smresp[i].avi+"'><span style='color:"+smresp[i].c+"; margin:16px 0; float:left;  font-size:12pt;  '>"+smresp[i].username+"</span>"+"<div style='float:left; clear:both; margin:0 40px;padding:0 4%; color:black;'>" + smresp[i].msg + "</div>";
                                       
                                    }
                                 div2.style="float:left; clear:both; width:100%;"
                                        div1.appendChild(div2);
                        
                            }

                        },
                    error:function(smresp){
                        console.log('smresp error', smresp);

                    }
                });

        }
    getusers();
    $scope.showmore = function($event){
        var thissy = $event.target;
      
        var user = thissy.getAttribute('data-user');
        $("#" + user).fadeIn();
        
        $('.exitupopup').click(function(){
              $("#" + user).fadeOut();
        
        });
    };
    
    function getusers(){
            
       
                    $.ajax({
                        url:'./cont/chatroom.php',
                        dataType:'JSON',
                        data:{
                            method:'showUsersInChatRoom',
                            crid:crid
                          
                        },
                        type:'POST',
                        success:function(uresp){
                        //    console.log('uresp is', uresp);
                             $scope.$apply(function(){
                                $scope.Chatusers = uresp;
                            });
                            
                    },
                    error:function(uresp){
                        console.log('uresp error', uresp);

                    }
                });
    };

             $( "#msgbox" ).on( "keydown", function( event ) {
                 
                 var which = event.which;
       
                 
                 if(which == 13){
                     
                     $.ajax({
                        url:'./cont/messages.php',
                        dataType:'JSON',
                        data:{
                            msg:msgbox.value,
                            method:'insertmsg',
                            crid:crid
                        },
                        type:'POST',
                        success:function(mresp){
                         //   console.log('mresp is', mresp);
                            
                            getmsgs();
                            $("#msgbox").val("");
                        },
                        error:function(mresp){
                            console.log('mresp error', mresp);

                        }
                    });
                    
                 }
                
            });
}]);



ctrl.controller('adminCtrl', ['$scope', function($scope){
    
    var userinfo =  sessionStorage.getObject('userinfo');
    
    if(userinfo.status != 1){
        $('.restricted').remove();
        $('.message').html('You do not have permission to view this page');
        document.getElementById('bigheader').style.display = 'none';
        document.getElementById('adminheader').style.display = 'none';
        document.getElementById('customerheader').style.display = 'block';
        
    } else {
       document.getElementById('bigheader').style.display = 'block';
        document.getElementById('adminheader').style.display = 'none';
        document.getElementById('customerheader').style.display = 'none';
    }
    
   
}]);

ctrl.controller('mychatroomsCtrl', ['$scope', function($scope){
  var userinfo =  sessionStorage.getObject('userinfo');  
    
    if(userinfo.status != 1){
     
        document.getElementById('bigheader').style.display = 'none';
        document.getElementById('adminheader').style.display = 'none';
        document.getElementById('customerheader').style.display = 'block';
        
    } else {
       document.getElementById('bigheader').style.display = 'none';
        document.getElementById('adminheader').style.display = 'block';
        document.getElementById('customerheader').style.display = 'none';
    }
    
    var userinfo =  sessionStorage.getObject('userinfo');
    showrooms();
    
    function showrooms(){
        $.ajax({
                url:'./cont/chatroom.php',
                dataType:'JSON',
                data:{
                    method:'showMyRooms',
                    uid:userinfo.user_id
                },
                type:'POST',
                success:function(myrooms){
                //    console.log('myrooms is', myrooms);
                    
                    if(myrooms == ''){
                        
                        if(userinfo.status ==1){
                             $('.mychatrooms').append("<p>You haven't made any chatrooms yet! <p><a href='#/new'>Make a new chatroom</a>");
                        } else {
                             $('.mychatrooms').append("<p>You haven't been invited to any chats yet. <a href = '#/profile'>Edit your profile while you wait!</a>");
                        }
                       
                    }

                    $scope.$apply(function(){

                        $scope.myrooms = myrooms;
       
                    });

                },
                error:function(myrooms){
                    console.log('myrooms error', myrooms);

                }
            });
    }
    
   $scope.goToRoom = function($event){
        
       var thiss = $event.target;
      
       var crid = thiss.getAttribute('data-roomid');
       var en =  btoa("hello world");
       en = en.replace("=", crid);
       window.location.href = '#/chat/'+en;
       
    };
    
}]);
