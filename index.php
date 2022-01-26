<?php

ob_start();

require_once 'controllers/routerController.php';
require_once 'models/routerModel.php';

include 'views/principal.php';

ob_end_flush();