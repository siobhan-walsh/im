var ctrl = angular.module('allctrls', []);

ctrl.controller('chatroomCtrl', ['$scope', function($scope){

                $scope.hideinp = 'true';
                
                $scope.showinp = function(){
                    
                    console.log('wow you clicked that h1');
                    $scope.hideinp = 'false';
                    
                }
              
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
