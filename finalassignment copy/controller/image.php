<?php


include("../model/imagedb.php");



if($_POST['method'] == "insert"){
         insert_image(); 
         
         
}

if($_POST['method'] == "getall"){
         getall(); 
         
          
}

?>