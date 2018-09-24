$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user);
            var user = firebase.auth().currentUser;


            firebase.database().ref("Usuarios/" + user.uid).once("value").then(function (snapshot) {
                var nombre = (snapshot.val() && snapshot.val().Nombre) || 'Sin nombre';
                var email = (snapshot.val()) && snapshot.val().Email || 'Sin email';                
                var image = (snapshot.val()) && snapshot.val().Imagen || 'Sin foto';


                var mostrar = '<span class="white-text name">' + nombre + '</span>';
                var mostrar2 = '<span class="white-text email">' + email + '</span>';
                var mostrar3 = '<a href="#user">';
                mostrar3+= '<img class="circle" src=' + image  + '>';
                mostrar3 += '</a>';

                $(mostrar3).appendTo('.user-view');
                $(mostrar).appendTo('.user-view');
                $(mostrar2).appendTo('.user-view');

            });


        } else {
            console.log('Usuario no logueado');
            location.assign('index.html');
        }
    });

    $('.btn').click(function () {
        location.assign('reservacion.html');
    });

   
        $('.sidenav').sidenav();
});