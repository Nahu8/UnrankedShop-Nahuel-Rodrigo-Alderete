let btnLogin = document.getElementById('btnLogin');
let recordar = document.getElementById("remmuser");



function datosLogin(storage) {

    let user = document.getElementById('usermail').value;
    let pass = document.getElementById('userpass').value;

    const usuario = {
        "user": user,
        "pass": pass
    }

    storage.setItem('user', JSON.stringify(usuario))
}

btnLogin.addEventListener('click', () => {
    if (recordar.checked) {
        datosLogin(localStorage);
    } else {
        datosLogin(sessionStorage);
    }
})

btnLogin.addEventListener('click', () => {
    if (user =! usermail) {
        alert('Se necesita llenar todos los espacios para iniciar sesión');
    } else {
        alert('Se ha iniciado sesión correctamente');
        window.location="./indexlogueado.html";
        alert('Se ha iniciado sesión correctamente');

    }
})
