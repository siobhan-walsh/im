<?php

include('../model/userdb.php');

    //CRUD users

  if($_POST['method'] == 'insert'){
      
      insert_user();
      
  }

    if($_POST['method'] == 'getsession'){
      
      check_session();
      
    }

 if($_POST['method'] == 'getUser'){
      
      get_user();
      
  }

 if($_POST['method'] == 'showAllUsers'){
      
     showAllUsers();
      
  }

if($_POST['method'] == 'updateUser'){
      
      updateUser();
      
  }

if($_POST['method'] == 'login'){
      
      loginUser();
      
  }

if($_POST['method'] == 'logout'){
      
      logoutUser();
      
  }


if($_POST['method'] == 'deleteUser'){
      
     // deleteUser();
      
  }
   
   
?>