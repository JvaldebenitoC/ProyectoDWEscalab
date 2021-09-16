//JS para la validacion de los campos del formulario de Contacto

var send = document.getElementById('submit');
var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var msg = document.getElementById('msg');
var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


send.onclick = function(){
    if( nombre.value.trim() == '' || nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
        alert("Ingresa tu nombre");
    }else if (!(reg.test(email.value))){
        alert("Ingresa un email válido");
    }else if (msg.value.trim() == '' || msg == null || msg.length == 0 || /^\s+$/.test(msg)){
        alert("Ingresa un mensaje");   
    }else{
        alert("Muchas gracias por enviar tus datos, me pondré en contacto contigo a la brevedad");
    }
    nombre.value = "";
    email.value = "";
    msg.value = "";

}

