<?php

    include('../model/users.php');


    if($_POST['method'] == 'insert_user'){
        insert_user();
    }
    
if($_POST['method'] == 'get_users'){
        get_users();
    }


?>