<?php

class DatabaseConnection {
  public static function dbConnection()
  {
    $dbcon = new mysqli('localhost','root','mysql123','tasks');
    return $dbcon;
  }
}