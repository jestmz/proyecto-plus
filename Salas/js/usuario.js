var nombre, apellido;

function alFinalizar(error) {

    if (error !== 'undefined') {
        switch (error.code) {
            case 'auth/email-already-in-use':
                alert('ERROR: No se puede crear la nueva cuenta de usuario, por que el e-mail ya está en uso !');
                break;
            case 'auth/invalid-email':
                alert('ERROR: El e-mail facilitado no es un e-mail correcto.');
                break;
            default:
                alert('Se ha producido un error al crear el usuario.\n\n' + error + '\n');
                break;
        }
    }
}

$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user);
            console.log('Usuario: ' + user.uid + ' está logueado con ' + user.providerData[0].providerId);

        } else {
            console.log('Usuario no logueado');
        }
    });

    var imagen;

    $("#imagen").change(function () {
        var contenido = new FileReader();
        contenido.readAsDataURL(this.files[0]);

        contenido.onload = function () {
            imagen = contenido.result;
            $("#previsualizacion").attr("src", imagen);
        };
    });


    $("#Aceptar").click(function () {
        var nombre = $("#nombre").val();
        var user = firebase.auth().currentUser;
        var img = imagen;

        if (!img) {
            imagen = "data:image/jpeg;base64,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";
        }

        if (nombre != "") {
            firebase.database().ref("Usuarios/" + user.uid).set({
                Id: user.uid,
                Nombre: nombre,
                Email: user.email,
                Imagen: imagen
            }, function () {
                alert('Tu usuario ha sido creado');
                location.assign("inicio.html");
            });
        } else {
            alert("No puedes dejar este campo vacío");
        }
    });


});