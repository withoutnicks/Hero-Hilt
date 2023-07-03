//! LOGIN

function login(event) {
  event.preventDefault();

  var email = document.getElementById("email-modal").value;
  var contraseña = document.getElementById("password-modal").value;

  if (email === "admin@hero.com" && contraseña === "hola123") {
    // Inicio de sesión exitoso, cerrar el modal
    document.getElementById("login-modal").classList.remove("show");
      document.getElementById("login-modal").setAttribute("aria-hidden", "true");
      document.querySelector(".modal-backdrop").remove();
      document.body.classList.remove("modal-open");
      document.getElementById("email-modal").value = "";
      document.getElementById("password-modal").value = "";
    window.open("dashboard.html", "_blank");
  } else {
    alert("Datos incorrectos");
  }
}
