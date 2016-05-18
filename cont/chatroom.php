<?php

include('../model/roomdb.php');

//CRUD Chat

if($_POST['method'] == 'insertRoom'){
      
    insertRoom();
      
}

if($_POST['method'] == 'showAllRooms'){
      
    showAllRooms();
      
  }
if($_POST['method'] == 'showMyRooms'){
      
    showMyRooms();
      
  }

if($_POST['method'] == 'updateRoom'){
      
     updateRoom();
      
  }
if($_POST['method'] == 'addUserToRoom'){
      
    addUserToRoom();
}

if($_POST['method'] == 'deleteRoom'){
      
    deleteRoom();
      
  }
   
   
?>