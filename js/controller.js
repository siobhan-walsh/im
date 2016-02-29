var ctrl = angular.module('allctrls', []);

ctrl.controller('chatroomCtrl', ['$scope', function($scope){

                $scope.hideinp = 'true';
                
                $scope.showinp = function(){
                    
                    console.log('wow you clicked that h1');
                    $scope.hideinp = 'false';
                    
                }
              
}]);

ctrl.controller('adminSignupCtrl', ['$scope', function($scope){
    
    
     var un = document.getElementById('un');
            var pw = document.getElementById('pw');
            var email = document.getElementById('email');
            var avi = './img/default/admin-avi-default.jpg';
            var c = 'rgba(244,22,131,1)';
            
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
         

ctrl.controller('signupCtrl', ['$scope', function($scope){
    
    
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
    
}]);

                
                
                
        
            /*
 
            var adminchat = angular.module("chat", []);
            
            
            adminchat.controller('userlist', ["$scope", function($scope){
                
                $scope.hidden = true;
                $scope.showmore = true;
                $scope.getUsers = function(){
                  
                    $.ajax({
                        url:'../cont/user.php',
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

                            /*

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
             */
