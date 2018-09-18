$(document).ready(function(){
    firebase.auth().onAuthStateChanged(function (user) {
        var user = firebase.auth().currentUser;
        
        var productos = {};
 
        firebase.database().ref('Usuarios/' + user.uid + '/Reservaciones').on('value', function(datos){
                productos = datos.val();                
 
                $.each(productos, function(inicio, valor){
                    var mostrar = '<div class="red accent-4"><span>' + valor.Fecha + '</span>';
                    mostrar +='<span>' + valor.Hora + '</span><br>';
                    mostrar +='<span>' + valor.Sala + '</span><br>';
                    mostrar +='<span>' + valor.Reserva + '</span><br></div>';
 
                    $(mostrar).appendTo('#Dispositivos');

                });
 
            },function(objetoError){
                console.log('Error ' + objetoError);
            });
    });
 
 });