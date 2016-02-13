<?php

    include('../model/users.php');


    if($_POST['method'] == 'insert_user'){
        insert_user();
    }
    


?>