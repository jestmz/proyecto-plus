$(document).ready(function () {    
    var imagen;
    
    $("#imagen").change(function () {
        var contenido = new FileReader();
        contenido.readAsDataURL(this.files[0]);        
    });
    
    $('#Guardar').click(function () {
        var nombre = $("#Nombre").val();
        var email = $("#Email").val();
        var user = firebase.auth().currentUser;

        if (!img) {
            imagen ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/250px-Apple_logo_black.svg.png";
        }

        var img = imagen;

        if(nombre != ""){
            firebase.database().ref("Usuarios/" + user.uid).update({
                Id: user.uid,
                Nombre: nombre,
                Email: user.email,
                Imagen: img
            }, function () {
                alert('Tu usuario ha sido actualizado');
                location.assign('../configuracion.html');
            });
        }
        else{
            alert("No puedes dejar este campo vacío");            
        }
    });
});