"use strict"
document.getElementById("bEnviar").addEventListener("click", validar);
document.getElementById("bBorrar").addEventListener("click", borrar);

function validar() {
    try {

        let exVal = new RegExp(/^[A-Z]{1}[a-z]+$/);

        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let correo = document.getElementById("correo").value;
        let provincia = document.getElementById("provincia").value;
        if (!exVal.test(nombre)) {
            document.getElementById("nombre").focus();

        }

    } catch (error) {
        alert(error)
    }
}

function borrar() {
    alert(1)
    try {
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("provincia").value = "";


    } catch (error) {
        alert("Error al borrar")
    }
}