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
                var mostrar3 = '<a href="inicio.html">';
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
        $('.sidenav').sidenav();

$('td').click(function () {
    document.getElementById("dada").style.display = "flex";
    document.getElementById("dede").style.width = "450px";
});


$("#Aceptar").click(function () {
    var sala = $("#Sala").val();
    var horai = $("#Horai").val();
    var horaf = $("#Horaf").val();

    var user = firebase.auth().currentUser;

    var Res = {
        Sala: sala,
        HoraI: horai,
        HoraF: horaf
    }

    if (sala == "" || horai == "" || horaf == "") {
        alert('No puedes dejar campos vacíos');
    } else {
        firebase.database().ref('Usuarios/' + user.uid + '/Reservaciones')
            .push(Res);

        alert('Tus datos se ingresaron correctamente');
        $("#Sala").val("");
        $("#Horai").val("");
		$("#Horaf").val("");
		
		document.getElementById("dada").style.display = "none";
		
		document.getElementsByTagName("td").style.background = "yellow";
    }


    firebase.auth().onAuthStateChanged(function (user) {
        var user = firebase.auth().currentUser;

        var productos = {};

        firebase.database().ref('Usuarios/' + user.uid + '/Reservaciones').on('value', function (datos) {
            productos = datos.val();

            $.each(productos, function (inicio, valor) {
            });

            document.getElementById("dada").style.display = "none";

        }, function (objetoError) {
            console.log('Error ' + objetoError);
        });

    });
});

$('.sidenav').sidenav();

$("#btnCancelar").click(function () {
    document.getElementById("dada").style.display = "none";
});
});