<?php

include('../model/roomdb.php');

//CRUD Chat

if($_POST['method'] == 'insertRoom'){
      
    inserRoom();
      
}

if($_POST['method'] == 'showAllRooms'){
      
    showAllRooms();
      
  }
if($_POST['method'] == 'showRoomsWhereId'){
      
    showRoomsWhereId();
      
  }

if($_POST['method'] == 'updateRoom'){
      
     updateRoom();
      
  }

if($_POST['method'] == 'deleteRoom'){
      
    deleteRoom();
      
  }
   
   
?>