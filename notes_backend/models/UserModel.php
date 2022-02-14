<?php

require_once './databaseConnection.php';

class UserModel {

  private $username;
  private $password;
  private $nombre;
  private $day_of_birth;
  private $profile_img;
  private $biography;

  public function getUsername()
  {
    return $this->username;
  }

  public function getPassword()
  {
    return $this->password;
  }

  public function setUsername($username)
  {
    $this->username = $username;
  }

  public function setPassword($password)
  {
    $this->password = $password;
  }

}