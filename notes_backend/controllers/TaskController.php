<?php


$model_dir = dirname(__FILE__, 2);

require_once $model_dir . '/models/TaskModel.php';

class TaskController
{

    public function __CONSTRUCT(){
        $this->taskModel = new TaskModel();
    }

    public function createTasks(){
        $data = json_decode(file_get_contents("php://input"));

        $this->taskModel->setTitle($data->title);
        $this->taskModel->setContent($data->content);
        $this->taskModel->setCreatedAt($data->created_at);
        $this->taskModel->setDeadline($data->deadline);
        $this->taskModel->setUserId($data->user_id);
        $this->taskModel->setPriority($data->priority);

        $task = $this->taskModel->createTask();

        if($task){
            echo json_encode(["Seccess"=>true, "msg"=>"Tarea insertada"]);
        }else{
            echo json_encode(["Seccess"=>false, "msg"=>"Error al instertar tarea"]);
        }
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

    public function updateTask(){
        $data = json_decode(file_get_contents("php://input"));

        $this->taskModel->setTitle($data->title);
        $this->taskModel->setContent($data->content);
        $this->taskModel->setDeadline($data->deadline);
        $this->taskModel->setPriority($data->priority);
        $this->taskModel->setTaskId($data->task_id);


        $task = $this->taskModel->updateTask();
        if($task){
            echo json_encode(
                [
                    "Seccess"=>true,
                    "msg"=>"Tarea actualizada"
                ]);
        }else{
            echo json_encode(["Seccess"=>false, "msg"=>"Error al actualizar tarea"]);
        }
    }

    public function hacerPublico(){
        $data = json_decode(file_get_contents("php://input"));

        $this->taskModel->setIsPublic($data->is_public);
        $this->taskModel->setTaskId($data->task_id);
        $publico = $this->taskModel->hacerPublico();
        if($publico){
            echo json_encode(
                [
                    "Seccess"=>true,
                    "msg"=>"Ahora tu tarea es público"
                ]);
        }else{
            echo json_encode(["Seccess"=>false, "msg"=>"Error al publicar tu tarea"]);
        }
    }

    public function getPublicTask(){
        $result = $this->taskModel->getPublicTask();
        $row = $result->fetch_all(MYSQLI_ASSOC);

        $json = json_encode(array("items" => $row));
        http_response_code(200);
        print_r($json);
        return $json;
    }

    public function deleteTask(){
        $data = json_decode(file_get_contents("php://input"));

        $this->taskModel->setTaskId($data->task_id);
        $delete = $this->taskModel->deleteTask();
        if($delete){
            echo json_encode(
                [
                    "Seccess"=>true,
                    "msg"=> "Tarea eliminada"
                ]);
        }else{
            echo json_encode(["Seccess"=>false, "msg" => "Error al eliminar tu tarea"]);
        }
    }

}