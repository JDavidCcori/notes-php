<?php include 'header.php' ?>

<div class="container d-flex align-self-center align-items-center" style="height: 100vh; width: fit-content">
  <div class="row-auto">
    <div class="col-auto">
      <h6>Login</h6>
        <form class="d-flex flex-column" action="" method="POST">
          <label class="form-label" for="">Usuario</label>
          <input class="form-control w-auto" type="text" name="user_name" required>
          <label class="form-label w-auto" for="">Contraseña</label>
          <input class="form-control w-auto" type="password" name="password" required>
          <input class="btn btn-success w-auto" type="submit" value="Iniciar Sesion" > <span>ó</span>
          <a class="btn btn-primary w-auto" href="index.php?route=register">Regístrate</a>
        </form>
      </div>
    </div>
  </div>
</div>