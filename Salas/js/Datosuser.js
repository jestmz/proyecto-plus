$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyA0OOMKbMytDe8FZSMEx44LOJLacepiBM8",
        authDomain: "salas-bbc10.firebaseapp.com",
        databaseURL: "https://salas-bbc10.firebaseio.com",
        projectId: "salas-bbc10",
        storageBucket: "salas-bbc10.appspot.com",
        messagingSenderId: "257972747978"
    };

    firebase.initializeApp(config);
    
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user);
            var user = firebase.auth().currentUser;
            
            
            firebase.database().ref("Usuarios/" + user.uid).once("value").then(function (snapshot) {
                var nombre = (snapshot.val() && snapshot.val().Nombre) || 'Sin nombre';
                var email = (snapshot.val()) && snapshot.val().Email || 'Sin email';                
                var image = (snapshot.val()) && snapshot.val().Imagen || 'Sin foto';
                
                var mostrar = '<img class="circle" src=' + image  + '>';
                mostrar += '<span class="white-text name">' + nombre + '</span>';
                mostrar += '<span class="white-text email">' + email + '</span>';
                mostrar += '<a href="#user">';
                mostrar += '</a>';
                
                $(mostrar).appendTo('.user-view');                
            });
            
        }else{
            console.log('Usuario no logueado');
        }
    });
    
    $('.dropdown-trigger').dropdown();
    $('.sidenav').sidenav();
    });