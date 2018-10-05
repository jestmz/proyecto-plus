$(document).ready(function () {
    $('#loader').show();

    firebase.auth().onAuthStateChanged(function (user) {
        var productos = {};
        var user = firebase.auth().currentUser;

        setTimeout(function () {
            $('#loader').hide();

            firebase.database().ref('Reservaciones/').on('value', function (datos) {
                productos = datos.val();

                $.each(productos, function (inicio, valor) {
                    var mostrar = '<div class="move">';
                    mostrar += '<div class="card blue-grey darken-1">';
                    mostrar += '<div class="card-content white-text">';
                    mostrar += '<span class="card-title" id="title">No. Sala: <span class="redt ta">'  + valor.Sala + '</span></span>';
                    mostrar += '<span class="card-title" id="title">Fecha: <span class="redt ta">'  + valor.Fecha + '</span></span>';
                    mostrar += '</div>';
                    mostrar += '<div class="fondo">';
                    mostrar += '<span class="card-title white-text" id="title">' + "Hora de inicio:" + '</span>';
                    mostrar += '<div class="card-title" id="title"><span class="redt ta">' + valor.HoraI + '</span></div>';
                    mostrar += '<span class="card-title white-text" id="title">' + "Hora de finalización:" + '</span>';
                    mostrar += '<div class="card-title" id="title"><span class="redt ta">' + valor.HoraF + '</span></div>';
                    mostrar += '</div>';
                    mostrar += '</div>';
                    mostrar += '</div>';

                    $(mostrar).appendTo('#row');
                    document.getElementById("footer").style.display = 'block';
                });
            }, function (objetoError) {
                console.log('Error ' + objetoError);
            });
        }, 2500);
    });

    $('#Mostrar').click(function () {
        document.getElementById("dada").style.display = "block";
        document.getElementById("dede").style.width = "450px";
    });

    $("#btnCancelar").click(function () {
        document.getElementById("dada").style.display = "none";
    });

    $("#Aceptar").click(function () {
        var sala = $("#Sala").val();
        var fecha = $("#Fecha").val();
        var horai = $("#Horai").val();
        var horaf = $("#Horaf").val();

        firebase.auth().onAuthStateChanged(function (user) {
            var user = firebase.auth().currentUser;

            var Res = {
                Sala: sala,
                Fecha: fecha,
                HoraI: horai,
                HoraF: horaf
            }

            var Res1 = {
                Nombre: user.email,
                Sala: sala,
                Fecha: fecha,
                HoraI: horai,
                HoraF: horaf
            }

            if (sala == "" || fecha == "" || horai == "" || horaf == "") {
                alert('No puedes dejar campos vacíos');
            } else {
                firebase.database().ref('Usuarios/' + user.uid + '/Reservaciones')
                    .push(Res);
                
                firebase.database().ref('Reservaciones')
                        .push(Res1);

                alert('Tus datos se ingresaron correctamente');

                $("#Sala").val("");
                $("#Fecha").val("");
                $("#Horai").val("");
                $("#Horaf").val("");

                document.getElementById("dada").style.display = "none";
                location.reload();
            }
        });
    });
});