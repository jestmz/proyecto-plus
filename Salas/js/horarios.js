$(document).ready(function(){
    firebase.auth().onAuthStateChanged(function (user) {
        var user = firebase.auth().currentUser;
        
        var productos = {};
 
        firebase.database().ref('Usuarios/' + user.uid + '/Reservaciones').on('value', function(datos){
                productos = datos.val();                
 
                $.each(productos, function(inicio, valor){
                    var mostrar = '<div class="move">';
                    mostrar += '<div class="card blue-grey darken-1">';
                    mostrar += '<div class="card-content white-text">';
                    mostrar += '<span class="card-title" id="title">' + valor.Sala + '</span>';
                    mostrar += '</div>';
                    mostrar += '<div class="fondo">';
                    mostrar +='<div class=""><span><p class="color">Hora de inicio: </p>' + valor.HoraI + '</span></div>';
                    mostrar +='<div class=""><span><p class="color">Hora de finalización: </p>' + valor.HoraF + '</span></div>';
                    mostrar += '</div>'; 
                    mostrar += '</div>';
                    mostrar += '</div>';
 
                    $(mostrar).appendTo('#row');

                });
                
                var boton = '<a class="waves-effect waves-light btn light-green accent-4" href="../inicio.html" id="Aceptar">'
                boton +='<i class="material-icons left">save'
                boton+= '</i>Regresar'
                boton += '</a>'

                $(boton).appendTo('#boton');
               
            },function(objetoError){
                console.log('Error ' + objetoError);
            });
    });
    $('.sidenav').sidenav();
 });