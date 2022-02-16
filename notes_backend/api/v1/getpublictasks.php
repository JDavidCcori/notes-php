<?php
$dir_controller = dirname(__FILE__,3);

require_once $dir_controller . '/controllers/TaskController.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$getpublictasks = new TaskController();

$getpublictasks->getPublicTask();