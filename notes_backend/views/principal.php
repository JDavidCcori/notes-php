<?php include 'header.php' ?>
<body>
  <?php
    $routerController = new RouterController();
    include 'menu.php';
  ?>
  <section>
    <?php
      $route = $routerController->routerController();
      include $route;
    ?>
  </section>
  <?php include 'footer.php' ?>
</body>
</html>