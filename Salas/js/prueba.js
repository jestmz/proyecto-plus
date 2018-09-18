

    $(document).ready(function () {

        function busca_user() {    
   
   


            var db = firebase.database();
            var ref = db.ref("Usuarios");
                 
            var table = document.getElementById("tabla");
                
            //limpia la tabla
            table.innerHTML = "";
             
             //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)
                
        
             
            }
            

        ref.collection('Usuarios')
        .get()
        .then(function ver(){
           var fecha = (snapshot.val() && snapshot.val().Fecha) || 'Sin fecha';
           var hora = (snapshot.val()) && snapshot.val().Hora || 'Sin hora';
           var sala = (snapshot.val() && snapshot.val().Sala) || 'Sin sala';
           var reserva = (snapshot.val()) && snapshot.val().reserva || 'Sin reserva';
   
   
           var mostrar = '<span class="white-text name">' + fecha + '</span><br>';
           var mostrar2 = '<span class="white-text email">' + hora + '</span><br>';
           var mostrar3 = '<span class="white-text name">' + sala + '</span><br>';
           var mostrar4 = '<span class="white-text email">' + reserva + '</span>';
   
           $(mostrar).appendTo('.user-view');
           $(mostrar2).appendTo('.user-view');
           $(mostrar3).appendTo('.user-view');
           $(mostrar4).appendTo('.user-view');
        });
    });