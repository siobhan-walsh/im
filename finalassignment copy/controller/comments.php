<?php
include("../model/commentsdb.php");

if($_POST['method'] == "insert"){
    insert_comment();   
}

if($_POST['method'] == "getall"){
    get_comments();   
}

if($_POST['method'] == "update"){
    update_comment();   
}

if($_POST['method'] == "delete"){
    delete_comment();   
}

?>