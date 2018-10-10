$(document).ready(function () {
    $('#loader').show();

    firebase.auth().onAuthStateChanged(function (user) {
        var productos = {};
        var user = firebase.auth().currentUser;

        setTimeout(function () {
            $('#loader').hide();

            firebase.database().ref('Reservaciones/Sala1').orderByChild('Fecha').on('value', function (datos) {
                productos = datos.val();

                $.each(productos, function (inicio, valor) {
                    var mostrar = '<tbody>';
                    mostrar += '<tr>';
                    mostrar += '<td>' + valor.Nombre + '</td>';
                    mostrar += '<td>' + valor.Fecha + '</td>';
                    mostrar += '<td>' + valor.HoraI + '</td>';
                    mostrar += '<td>' + valor.HoraF + '</td>';
                    mostrar += '</tr>';
                    mostrar += '</tbody>';

                    $(mostrar).appendTo('#table');
                    document.getElementById("table").style.display = 'block';
                    document.getElementById("footer").style.display = 'block';
                });
            },function(){
                    $("#table").tableSorter({
                        sortColumn: 'Fecha'
                    });
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
        var fecha = $("#Fecha").val();
        var horai = $("#Horai").val();
        var horaf = $("#Horaf").val();

        firebase.auth().onAuthStateChanged(function (user) {
            var user = firebase.auth().currentUser;

            var Res = {
                Sala: "Sala 2",
                Fecha: fecha,
                HoraI: horai,
                HoraF: horaf
            }

            var Res1 = {
                Nombre: user.email,
                Sala: "Sala 2",
                Fecha: fecha,
                HoraI: horai,
                HoraF: horaf
            }

            if (fecha == "" || horai == "" || horaf == "") {
                alert('No puedes dejar campos vacíos');
            } else {
                firebase.database().ref('Usuarios/' + user.uid + '/Reservaciones/Sala2')
                    .push(Res);

                firebase.database().ref('Reservaciones/Sala2')
                    .push(Res1);

                alert('Tus datos se ingresaron correctamente');
                location.reload();

                $("#Fecha").val("");
                $("#Horai").val("");
                $("#Horaf").val("");

                document.getElementById("dada").style.display = "none";
            }
        });
    });
});