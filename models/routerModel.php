<?php

class RouterModel {

  public function routerModel($route)
  {
    if ($route == 'principal' ||
        $route == 'logout' ||
        $route == 'login' ||
        $route == 'register' ||
        $route == 'edit'
    ) {
      $view = $route . ".php";
    } elseif ($route == 'index') {
      $view = "login.php";
    }
    else {
      $view = "login.php";
    }
    return $view;
  }
}
