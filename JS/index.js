"use strict"
document.getElementById("bEnviar").addEventListener("click", validar);
document.getElementById("bBorrar").addEventListener("click", borrar);

function validar() {
    try {

        let exVal = new RegExp(/^[A-Z]{1}[a-z]+$/);
        let exgm = new RegExp('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$');

        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let correo = document.getElementById("correo").value;
        let provincia = document.getElementById("provincia").value;

        if (!exVal.test(nombre)) {
            document.getElementById("nombre").focus();
            throw "En el formulario hay datos MAL";
        }

        if (!exVal.test(apellido)) {
            document.getElementById("apellido").focus();
            throw "En el formulario hay datos MAL";
        }

        if (!exgm.test(correo)) {
            document.getElementById("correo").focus();
            throw  "En el formulario hay datos MAL"
        }
        
        if (exVal.test("provincia")) {
            document.getElementById("provincia").focus();
            throw  "En el formulario hay datos MAL"
            
        }

        //chekbox 
        let condi = document.getElementById("ident");
         for (let i = 0; i < condi.length; i++) {
         }

         //radio
        let anos = document.getElementById("edad");
        for (let i = 0; i < anos.length && !anos[i].checked; i++);
        if (i == anos.length)
            throw "La edad es obligatoria";
        let edad = anos[i].value;

        //creacion del objeto dato
        let datos = {nombre:nombre, 
            apellido:apellido, correo:correo, 
            provincia:provincia, edad:edad, 
            ident:ident
        }

        alert("Nombre: " + datos.nombre + "\n Apellido " + datos.apellido +  "\n Correo " + datos.correo 
            + "\n Provincia " + datos.provincia + "\n edad " + datos.edad + "\n Aceptando condiciones " + datos.ident);

    } catch (error) {
        alert(error)
    }
}

function borrar() {
    try {
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("provincia").value = "";


    } catch (error) {
        alert("Error al borrar")
    }
}