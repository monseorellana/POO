function verificarUsuario() {

    let nombreusuario = prompt("por favor ingrese su nombre de usuario: ");
    let contraseña = prompt("por favor ingrese su contraseña: ");

    const usuario = "usuario123";
    const contra = "secreto";

    if (nombreusuario == usuario && contraseña == contra) {
        document.getElementById('lista').innerHTML = "<h2>Lograste acceder</h2>";
    } else {
        document.getElementById('lista').innerHTML = "<h2>acceso denegado</h2>";
    }
}