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
}