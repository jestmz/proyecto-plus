var nombre, apellido;
    
function alFinalizar(error) {

  if (error !== 'undefined') {
      switch (error.code) {
          case 'auth/email-already-in-use':
              alert('ERROR: No se puede crear la nueva cuenta de usuario, por que el e-mail ya está en uso !');
              break;
          case 'auth/invalid-email':
              alert('ERROR: El e-mail facilitado no es un e-mail correcto.');
              break;
          default:
              alert('Se ha producido un error al crear el usuario.\n\n' + error + '\n');
              break;
      }
  }
}

$(document).ready(function () {
  firebase.auth().onAuthStateChanged(function(user)
    {
        if (user)
        {
            console.log(user);
            console.log('Usuario: '+user.uid+' está logueado con '+user.providerData[0].providerId);
            
        } else
        {
            console.log('Usuario no logueado');
        }
    });  

    
    
    var img;

    $("#imagen").change( function(){
        var contenido = new FileReader();
        contenido.readAsDataURL(this.files[0]); 

        contenido.onload = function(){
            img = contenido.result;
        };
    }) ;
    
    
    
    $("#Aceptar").click(function () {
        var nombre = $("#nombre").val();
        
        
        
        var user = firebase.auth().currentUser;


        if(nombre == ""){
            alert("No puedes dejar este campo vacío");
        }
        else{
            firebase.database().ref("Usuarios/" + user.uid).set({
                Id : user.uid,
                Nombre: nombre,
                Email: user.email,
                Imagen: img
            }, function () {
                alert('Tu usuario ha sido creado');
                location.assign("inicio.html");
            });
            
        }
        

        // An error happened.
    });
    

});

