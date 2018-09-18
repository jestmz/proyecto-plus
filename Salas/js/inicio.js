$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user);
            var user = firebase.auth().currentUser;


            firebase.database().ref("Usuarios/" + user.uid).once("value").then(function (snapshot) {
                var nombre = (snapshot.val() && snapshot.val().Nombre) || 'Sin nombre';
                var email = (snapshot.val()) && snapshot.val().Email || 'Sin email';

                var mostrar = '<span class="white-text name">' + nombre + '</span>';
                var mostrar2 = '<span class="white-text email">' + email + '</span>';

                $(mostrar).appendTo('.user-view');
                $(mostrar2).appendTo('.user-view');


            });

        } else {
            console.log('Usuario no logueado');
            location.assign('index.html');
        }
    });

   
        $('.sidenav').sidenav();
});

function desconectar() {
    firebase.auth().signOut().then(function () {
        location.assign('index.html');
    }, function (error) {
        alert("Error al intentar desconectarse.");
    });

}