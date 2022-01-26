<?php include 'header.php' ?>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  <?php if($routerController->routerController()): ?>
    <li class="nav-item">
      <a class="nav-link active" href="index.php?route=login">Login</a>
    </li>
  <?php else: ?>
    <li class="nav-item">
      <a class="nav-item" href="index.php?route=register">Register</a>
    </li>
    <li class="nav-item">
      <a class="nav-item" href="index.php?route=dashboard">Dashboard</a>
    </li>
    <li class="nav-item">
      <a class="nav-item" href="index.php?route=">Logout</a>
    </li>
  <?php endif; ?>
  </ul>
</nav>