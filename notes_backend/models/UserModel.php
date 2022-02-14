    <?php

    $db_dir = dirname(__FILE__);

    require_once $db_dir . '/dataBaseConection.php';

    class UserModel {

        private $connection;

        private $user_id;
        private $email;
        private $password;
        private $name;
        private $day_of_birth;
        private $profile_img;
        private $biography;

        public function __CONSTRUCT(){
            try {
                $this->connection = DatabaseConnection::dbConnection();
            }catch (Exception $exception){
                die($exception->getMessage());
            }
        }

        /**
         * @return mixed
         */
        public function getUserId()
        {
            return $this->user_id;
        }

        /**
         * @param mixed $user_id
         */
        public function setUserId($user_id)
        {
            $this->user_id = $user_id;
        }

        /**
         * @return mixed
         */
        public function getEmail()
        {
            return $this->email;
        }

        /**
         * @param mixed $email
         */
        public function setEmail($email)
        {
            $this->email = $email;
        }

        /**
         * @return mixed
         */
        public function getPassword()
        {
            return password_hash($this->connection->real_escape_string($this->password), PASSWORD_DEFAULT);
        }

        /**
         * @param mixed $password
         */
        public function setPassword($password)
        {
            $this->password = $this->connection->real_escape_string($password);
        }

        /**
         * @return mixed
         */
        public function getName()
        {
            return $this->name;
        }

        /**
         * @param mixed $name
         */
        public function setName($name)
        {
            $this->name =$this->connection->real_escape_string( $name);
        }

        /**
         * @return mixed
         */
        public function getDayOfBirth()
        {
            return $this->day_of_birth;
        }

        /**
         * @param mixed $day_of_birth
         */
        public function setDayOfBirth($day_of_birth)
        {
            $this->day_of_birth = $this->connection->real_escape_string($day_of_birth);
        }

        /**
         * @return mixed
         */
        public function getProfileImg()
        {
            return $this->profile_img;
        }

        /**
         * @param mixed $profile_img
         */
        public function setProfileImg($profile_img)
        {
            $this->profile_img = $this->connection->real_escape_string($profile_img);
        }

        /**
         * @return mixed
         */
        public function getBiography()
        {
            return $this->biography;
        }

        /**
         * @param mixed $biography
         */
        public function setBiography($biography)
        {
            $this->biography = $this->connection->real_escape_string($biography);
        }

        public function userRegister(){
            $email = $this->getEmail();
            $name = $this->getName();
            $password = $this->getPassword();

            $query = "INSERT INTO users (email,name,password) VALUES(?,?,?)";

            try {
                $stmt = mysqli_prepare($this->connection, $query);
                if ($stmt === false) {
                    /* Puedes hacer un return con ok a false o lanzar una excepción */
                    /*throw new Exception('Error en prepare: ' . $stmt->error);*/
                    return [ 'ok' => 'false' ];
                }
                $stmt->bind_param("sss", $email, $name,$password);
                $result = $stmt->execute();
            }catch (PDOException $exception){
                throw new RuntimeException(
                    'No se pudo insertar el usuario' . $exception->getMessage(),
                    $exception->getCode(),
                    $exception
                );
            }
            return $result;
        }

        public function Login(){
            $email = $this->email;
            $password = $this->password;

            $query = "SELECT * FROM users where email='$email' ";

            try {
                $result = $this->connection->query($query);
                $row=mysqli_fetch_assoc($result);
                if (password_verify($password, $row['password'])){
                    return $row;
                }
            }catch (PDOException $exception){
                throw new RuntimeException(
                    'No se pudo insertar el usuario' . $exception->getMessage(),
                    $exception->getCode(),
                    $exception
                );
            }
            return $result;
        }
    }