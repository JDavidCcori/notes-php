<?php
$model_dir = dirname(__FILE__, 2);

require_once $model_dir . '/models/CommentModel.php';

class CommentController
{
    public function __CONSTRUCT(){
        $this->commentModel = new CommentModel();
    }

    public function createComment(){
        $data = json_decode(file_get_contents("php://input"));

        $this->commentModel->setUserId($data->user_id);
        $this->commentModel->setTaskId($data->task_id);
        $this->commentModel->setContent($data->content);
        $this->commentModel->setCreatedAt($data->created_at);

        $task = $this->commentModel->createComment();

        if($task){
            echo json_encode(["Seccess"=>true, "msg"=>"Comentario agregado"]);
        }else{
            echo json_encode(["Seccess"=>false, "msg"=>"Error al agregar comentario"]);
        }
    }

    public function getComments(){
        $task_id = $_GET['task_id'];
        $result = $this->commentModel->getComments($task_id);
        $row = $result->fetch_all(MYSQLI_ASSOC);

        $json = json_encode(array("items" => $row));
        http_response_code(200);
        print_r($json);
        return $json;
    }
}