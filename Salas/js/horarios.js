$(document).ready(function () {
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
                    mostrar += '<span class="card-title" id="title">' + "Usuario:" + '</span>';
                    mostrar += '<span class="card-title redt" id="title">' + valor.Nombre + '</span>';
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
});