<?php
class RouterController {

  public function getPrincipal() {
    return 'views/principal';
  }

  public function routerController()
  {
    if (isset($_GET['route'])) {
      $route = $_GET['route'];
    }
    else {
      $route = 'index';
    }
    $routerModel = new RouterModel($route);
    $view = $routerModel->routerModel($route);
    return $view;
  }
}