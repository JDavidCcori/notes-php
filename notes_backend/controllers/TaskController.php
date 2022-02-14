<?php


$model_dir = dirname(__FILE__, 2);

require_once $model_dir . '/models/UserModel.php';

class TaskController
{

    public function __CONSTRUCT(){
        $this->taskModel = new TaskModel();
    }

    public function getTaskByUser(){
        $user_id = $_GET['user_id'];
        $result = $this->taskModel->getTaskByUser($user_id);
        $row = $result->fetch_all(MYSQLI_ASSOC);

        $json = json_encode(array("items" => $row));
        http_response_code(200);
        print_r($json);
        return $json;
    }
}