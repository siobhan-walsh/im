<?php
include("connect.php");

    function insert_comment(){
      global $db;
      $query = "INSERT INTO comments (comment, user_id, user_id2) VALUES ('".$_POST['comment']."', '".$_POST['user_id']."', '".$_POST['user_id2']."')";
      $result = $db->query($query);
    }

    function get_comments(){
      global $db;
      $query = "SELECT comments.ID AS comment_id, comments.comment, comments.user_id, users.username 
      FROM comments 
      LEFT JOIN users ON comments.user_id = users.ID 
      WHERE user_id2 = '".$_POST['user_id']."'";
      $result = $db->query($query);
      echo json_encode($result->fetchAll());
    }

    function update_comment(){
      global $db;
      $query = "UPDATE comments SET comment = '".$_POST['comment']."' WHERE ID='".$_POST['comment_id']."'";
      $result = $db->query($query);
    }

    function delete_comment(){
      global $db;
      $query = "DELETE FROM comments WHERE ID = '".$_POST['comment_id']."'";
      $result = $db->query($query);
    }

?>