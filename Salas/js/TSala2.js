$(document).ready(function () {
    $('#loader').show();

    firebase.auth().onAuthStateChanged(function (user) {
        var productos = {};
        var user = firebase.auth().currentUser;

        setTimeout(function () {
            $('#loader').hide();

            firebase.database().ref('Usuarios/' + user.uid + 'Reservaciones/Sala2').on('value', function (datos) {
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
                    document.getElementById("footer").style.display = 'block';
                });
            }, function (objetoError) {
                console.log('Error ' + objetoError);
            });
        }, 2500);
    });
});