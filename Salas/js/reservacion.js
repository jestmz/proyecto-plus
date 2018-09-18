$(document).ready(function () {

    $("#Aceptar").click(function () {
        var fecha = $("#Fecha").val();
        var hora = $("#Hora").val();
        var sala = $("#Sala").val();
        var reserva = $("#Reserva").val();
    
        var user = firebase.auth().currentUser;
        
        var Res = {
        Fecha : fecha,
        Hora: hora,
        Sala: sala,
        Reserva: reserva
    }   


       firebase.database().ref('Usuarios/' + user.uid + '/Reservaciones')
           .push(Res);
        
        alert('Tus datos se ingresaron correctamente');
        $("#Fecha").val("")
        $("#Hora").val("");
        $("#Sala").val("");
        $("#Reserva").val("");
    });
    

    $("#btnCancelar").click(function () {
        location.assign('inicio.html');
    });
});