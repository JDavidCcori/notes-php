<?php include 'header.php' ?>

<div class="container">
  <div class="row-auto ">
    <div class="col-auto">
      <div class="d-flex justify-content-center align-items-center">
        <div class="border border-3 rounded-3 border-dark p-3 ">
          <h5>Regístrate</h5>
          <form class="d-flex flex-column" action="" method="POST">
            <label class="form-label w-auto" for="">Usuario
              <input class="form-control w-auto" type="text" name="user_name" required>
            </label>
            <label class="form-label" for="">Contraseña
              <input class="form-control w-auto" type="password" name="password" required>
            </label>
            <input class="btn btn-success w-auto" type="submit" value="Registrarme">
          </form>
        </div>
      </div>
    </div>
  </div>
</div>