// ====== AUXILIAR FUNCTIONS ====== //

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

		alert(readCookie());

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
	  name = getCookie("nameSurname");
	  document.getElementById("user-session-name").innerHTML = "<img src='images/user.png' alt='User Image'></img>"+name;
}


