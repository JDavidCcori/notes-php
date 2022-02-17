<?php

$model_dir = dirname(__FILE__, 2);

require_once $model_dir . '/models/FollowerModel.php';

class FollowerController
{

    public function __CONSTRUCT(){
        $this->followerModel = new FollowerModel();
    }

    public function addFollower(){
        $data = json_decode(file_get_contents("php://input"));

        $this->followerModel->setSenderId($data->sender_id);
        $this->followerModel->setReceptorId($data->receptor_id);
        $this->followerModel->setCreatedAt($data->created_at);
        $task = $this->followerModel->addFollower();

        if($task){
            echo json_encode(["Seccess"=>true, "msg"=>"Tarea insertada"]);
        }else{
            echo json_encode(["Seccess"=>false, "msg"=>"Error al instertar tarea"]);
        }
    }

    public function getFollowers(){
        $receptor_id = $_GET['receptor_id'];
        $result = $this->followerModel->getFollowers($receptor_id);
        $row = $result->fetch_all(MYSQLI_ASSOC);

        $json = json_encode(array("items" => $row));
        http_response_code(200);
        print_r($json);
        return $json;
    }
}
