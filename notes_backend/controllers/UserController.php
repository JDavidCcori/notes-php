<?php

$model_dir = dirname(__FILE__, 2);

require_once $model_dir . '/models/UserModel.php';


class UserController
{
    public function __CONSTRUCT(){
        $this->userModel = new UserModel();
    }

    public function userRegister(){

        $data = json_decode(file_get_contents("php://input"));

        $email = $data->email;
        $name = $data->name;
        $password = $data->password;

        $this->userModel->setEmail($email);
        $this->userModel->setName($name);
        $this->userModel->setPassword($password);

        $result = $this->userModel->userRegister();

        if ($result){
            echo json_encode([
                "Succes" => true,
                "msg" => "Felicidades ya estas registrado",
            ]);
        }else{
            echo json_encode([
                "Succes" => false,
                "msg" => "Tuvimos un error al registrar tus datos :("
            ]);
        }
    }

    public function Login(){

        $data = json_decode(file_get_contents("php://input"));

        $email = $data->email;
        $password = $data->password;

        $this->userModel->setEmail($email);
        $this->userModel->setPassword($password);

        $result = $this->userModel->Login();

        if (is_array($result)&& !empty($result)){
            session_start();
            $usuario_valido=$result['email'];
            $_SESSION['Valido']=$usuario_valido;
            $_SESSION['Email']=$result['email'];
            $_SESSION['User_id']=$result['user_id'];

            echo json_encode([
                "Succes" => true,
                "email" => $result['email'],
                "name" => $result['name'],
                "user_id" => $result['user_id']
            ]);
        }else{
            echo json_encode([
                "Succes" => false,
                "error" => "Contraseña o usuario incorrecto"
            ]);
        }
    }


    public function updateUser(){
        $data = json_decode(file_get_contents("php://input"));

        $this->userModel->setName($data->name);
        $this->userModel->setDayOfBirth($data->day_of_birth);
        $this->userModel->setBiography($data->biography);
        $this->userModel->setUserId($data->user_id);

        $task = $this->userModel->updateUser();
        if($task){
            echo json_encode(
                [
                    "Seccess"=>true,
                    "msg"=>"Usuario actualizado"
                ]);
        }else{
            echo json_encode(["Seccess"=>false, "msg"=>"Error al actualizar usuario"]);
        }
    }

    public function updateProfile(){
        $DIR = dirname(__FILE__,2) . '/userimg/';
        $user_id = $_POST['user_id'];
        if($_FILES["image"]){

            $fileName = $_FILES["image"]["name"];
            $tempFileName = $_FILES["image"]["tmp_name"];
            $error = $_FILES["image"]["error"];
            if($error > 0){
               echo json_encode([
                   "status" => "error",
                   "error" => true,
                   "message" => "Error uploading the file!"
               ]);
            }else {
                $FILE_NAME = rand(10, 1000000)."-".$fileName;
                $UPLOAD_IMG_NAME = strtolower($FILE_NAME);
                $UPLOAD_IMG_NAME = preg_replace('/\s+/', '-', $UPLOAD_IMG_NAME);
                $photo_dir = $DIR .  $UPLOAD_IMG_NAME;
                if(move_uploaded_file($tempFileName , $photo_dir)) {
                    $this->userModel->setProfileImg($UPLOAD_IMG_NAME);
                    $this->userModel->setUserId($user_id);
                    $this->userModel->updateProfile();
                    echo json_encode([
                        "status" => "success",
                        "error" => false,
                        "message" => "Image has uploaded",
                        "url" => $photo_dir,
                        "user_i" => $UPLOAD_IMG_NAME
                    ]);
                }else
                {
                   echo json_encode([
                       "status" => "error",
                       "error" => true,
                       "message" => "Error occured"
                   ]);
                }

            }
        }
        else{
           echo json_encode([
               "status" => "error",
               "error" => true,
               "message" => "File not found"
           ]);
        }

    }

    public function updatePassword(){
        $data = json_decode(file_get_contents("php://input"));

        $this->userModel->setPassword($data->password);
        $this->userModel->setUserId($data->user_id);

        $task = $this->userModel->updatePassword();
        if($task){
            echo json_encode(
                [
                    "Seccess"=>true,
                    "msg"=>"Contraseña actualizado"
                ]);
        }else{
            echo json_encode(["Seccess"=>false, "msg"=>"Error al actualizar contraseña"]);
        }
    }

    public function getUserById(){
        $user_id = $_GET['user_id'];
        $result = $this->userModel->getUserById($user_id);
        $row = $result->fetch_all(MYSQLI_ASSOC);
        $json = json_encode(array("items" => $row));
        http_response_code(200);
        print_r($json);
        return $json;
    }
}
