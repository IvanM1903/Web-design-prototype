$(document).ready(function(){
	//Aparece el formulario de registro -> cierra el contenido previo
	$("#AbrirRegistro").click(function(){
		$(".content").slideUp();
		$(".register-form").delay(400).slideDown();
	});
	//Se cierra el formulario de registro -> abre login & desaparece el welcome
	$("#CerrarRegistro").click(function(){
		$(".register-form").slideUp();
		$(".content").delay(400).slideDown();
		$(".welcome").slideUp();
		$(".login-form").delay(400).slideDown();
	});
	//Aparece la pantalla de login desde welcome
	$(".welcome-login").click(function(){
		$(".welcome").slideUp();
		$(".login-form").delay(400).slideDown();
	});
	//Abre la pantalla de registro desde welcome
	$(".welcome-register").click(function(){
		$(".content").slideUp();
		$(".register-form").delay(400).slideDown();
	});
	//Regresa al welcome desde login
	$(".login-back-to-welcome").click(function(){
		$(".login-form").slideUp();
		$(".welcome").delay(400).slideDown();
	});
	//Regresa al welcome desde registro
	$(".register-back-to-welcome").click(function(){
		$(".register-form").slideUp();
		$(".content").delay(400).slideDown();
		$(".login-form").slideUp();
		$(".welcome").delay(400).slideDown();
	});

	// Ajustamos el contenedor de los terminos de privacidad al ancho del elemento padre
	var my_width = $('.privacy-pol').width();
	var info_width = $('.content-right-container').width();
	$('.privacy-pol').width(info_width);


});





// ====== AUXILIAR FUNCTIONS ====== //

function showPassword() {
	var x = document.getElementById("inputPasswordLog");
	var y = document.getElementById("inputPasswordReg");
	if (x.type === "password") {
	  x.type = "text";
	} else {
	  x.type = "password";
	}
	if (y.type === "password") {
	  y.type = "text";
	} else {
	  y.type = "password";
	}
}

function onlyStudent(rol){
	if(rol != "Estudiante"){
		document.getElementsByName("grades")[0].value = "-----";
		document.getElementsByName("grades")[0].disabled = true;
		document.getElementById("registerCampus").disabled = false;
	}else{
		document.getElementsByName("grades")[0].disabled = false;
		document.getElementById("registerCampus").disabled = true;
	}
}

function setCampus(grades){
	if(grades.includes("Ingeniería")){
		document.getElementById("registerCampus").value = "Campus de Leganés";
	}else{
		document.getElementById("registerCampus").value = "Campus de Getafe";
	}
}

function deleteContent(){
	//Valores por defecto
	document.getElementById("registerName").value = "";
	document.getElementById("registerNia").value = "";
	document.getElementById("inputPasswordReg").value = "";
	document.getElementById("registerNameSurname").value = "";
	document.getElementById("registerEmail").value = "";
	document.getElementById("registerDate").value = "";
	document.getElementById("registerDNI").value = "";
	document.getElementById("registerRol").value = "Estudiante";
	document.getElementById("registerGrades").value = "Ingeniería Informática";
	document.getElementById("registerLanguage").value = "Español";
	//Reinciamos a la vista de Estudiante (vista por defecto de los roles)
	onlyStudent("Estudiante");
}


// ====== CHECK FUNCTIONS ====== //

function validEmail(email) {
    var regEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (email.match(regEx)){
   		return true;
    }
    else{
    	alert("El email no es valido");
    	return false;
    }
}
function validNIA(nia){
	//Tiene que ser un número mayor que 100000000 y menor que 100999999
	if(nia >= 100000000 && nia <= 100999999){
		return true;
	}
	else{
		alert("NIA debe ser un número de 9 dígitos que empiece por 100xxxxxx");
		return false;
	}
}

function validPassword(pass){
	if(pass.length > 8){
		alert("Contraseña demasiado larga");
		return false;
	}
	//Comprobamos que contenga a-z A-Z y 0-9
	var lowerCaseLetters = /[a-z]/g;
	var upperCaseLetters = /[A-Z]/g;
	var numbers = /[0-9]/g;

	if((pass.match(lowerCaseLetters) && pass.match(numbers))||
	(pass.match(upperCaseLetters) && pass.match(numbers))){
		return true;
	}
	else{
		alert("La contraseña debe contener al menos una mayúscula/minúscula y un número");
		return false;
	}
}

function validDNI(dni){
	if(dni.length != 9){
		alert("El DNI debe tener 9 carácteres.");
		return false;
	}else{
		for (i = 0; i < dni.length -1; i++){
			if(isNaN(dni.charAt(i))){
				alert("El DNI debe contener 8 números y una letra.");
				return false;
			}
		}
		return true;
	}
}

// ====== FUNCTION COOKIE REGISTER ====== //
function readCookie(){
	var x = document.cookie;
	return x;
}

function registrarUsuario(){

	// ====== INPUT REGISTER VARIABLES ====== //

	var inputUsername = document.getElementById("registerName").value;
	var inputNia = document.getElementById("registerNia").value;
	var inputPassword = document.getElementById("inputPasswordReg").value;
	var inputNameSurname = document.getElementById("registerNameSurname").value;
	var inputEmail = document.getElementById("registerEmail").value;
	var inputDate = document.getElementById("registerDate");
	var inputDNI = document.getElementById("registerDNI").value;
	var inputRol = document.getElementById("registerRol").value;
	var inputCampus = document.getElementById("registerCampus").value;
	var inputGrades = document.getElementById("registerGrades").value;
	var inputLanguage = document.getElementById("registerLanguage").value;
	var formRegistration = document.getElementById("registration");


	//Comprobamos que los campos importantes sean correctos
	if(validNIA(inputNia) && validPassword(inputPassword)
		&& validEmail(inputEmail) && validDNI(inputDNI)){

		//Como los campos son válidos, creamos la cookie
		var cookieUsername = "userName="+inputUsername;
		document.cookie = cookieUsername;

		var cookieNameSurname = "nameSurname="+inputNameSurname;
		document.cookie = cookieNameSurname;

		var cookieNia = "nia="+inputNia;
		document.cookie = cookieNia;

		var cookiePassword = "password="+inputPassword;
		document.cookie = cookiePassword;

		var cookieEmail = "email="+inputEmail;
		document.cookie = cookieEmail;

		var cookieRol = "rol="+inputRol;
		document.cookie = cookieRol;

		var cookieGrade = "grado="+inputGrades;
		document.cookie = cookieGrade;
		//alert(readCookie());

		return true;
	}else{
		$('#registration').on('submit',function(event){
			event.preventDefault();
		});
	}
}

// ====== LOGIN USER METHODS ====== //

function loginUsuario(){
	var cookieEMail = getCookie("email");
	var cookiePass = getCookie("password");
	var inputEMail = document.getElementById("inputEmailLogin").value;
	var inputPass = document.getElementById("inputPasswordLog").value;
	if (cookieEMail != inputEMail || cookiePass != inputPass){
		alert("Credenciales no válidas");
		//Evitar envío formulario de login
		$('#loginForm').on('submit',function(event){
			event.preventDefault();
		});
	}
}
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }
function writeNameFromCookie(){
	  var name = "";
	  var mail = "";
	  name = getCookie("nameSurname");
	  mail = getCookie("email");
	  document.getElementById("user-session-name").innerHTML = name;
	  document.getElementById("user-session-name-desktop").innerHTML = name;
	  document.getElementById("user-session-mail").innerHTML = mail;
}


