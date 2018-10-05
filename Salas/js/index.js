var email, password;

$(document).ready(function () {
        $("#botonLogin").click(function () {
        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().signInWithEmailAndPassword(email, password).then(exito).catch(alFinalizar);

    });
    
    $( "#password" ).keypress(function() {
        if (event.which == 13) {
                var email = $("#email").val();
                var password = $("#password").val();
        
                firebase.auth().signInWithEmailAndPassword(email, password).then(exito).catch(alFinalizar);
         }
      });

    $("#btnRegistrar").click(function () {
        location.assign('../registro.html');
    });

    $("#btnCancelar").click(function () {
        location.assign('../pagina.html');
    });

});

function exito() {
    location.assign("../inicio.html");
}

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
                alert('Ocurrio un error inesperado');
        }
    }
}


