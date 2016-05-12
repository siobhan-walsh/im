<?php


include("../model/msgdb.php");



if($_POST['method'] == "insert"){
         insert_message(); 
         
         
}


if($_POST['method'] == "getall"){
         get_messages(); 
         
         
}

?>