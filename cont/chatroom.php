<?php

include('../model/roomdb.php');

//CRUD Chat

if($_POST['method'] == 'insertRoom'){
      
    insertRoom();
      
}

if($_POST['method'] == 'showAllChatrooms'){
      
    showAllChatrooms();
      
  }
if($_POST['method'] == 'showMyRooms'){
      
    showMyRooms();
      
  }

if($_POST['method'] == 'updateChatroom'){
      
     updateChatroom();
      
  }
if($_POST['method'] == 'addUserToRoom'){
      
    addUserToRoom();
}

if($_POST['method'] == 'deleteChatroom'){
      
    deleteChatroom();
      
  }

if($_POST['method'] == 'showUsersInChatRoom'){
      
    showUsersInChatRoom();
      
  }


   
   
?>