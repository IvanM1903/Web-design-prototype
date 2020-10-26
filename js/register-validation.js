
// ====== Form Register Variables ====== //
const username = document.getElementById("registerName");
const nia = document.getElementById("registerNia");
const registerPassword = document.getElementById("inputPasswordReg");
const nameSurname = document.getElementById("registerNameSurname");
const email = document.getElementById("registerEmail");
const date = document.getElementById("registerDate");
const dni = document.getElementById("registerDNI");
const rol = document.getElementById("registerRol");
const campus = document.getElementById("registerCampus");
const grades = document.getElementById("registerGrades");
const language = document.getElementById("registerLanguage");


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

	onlyStudent("Estudiante");
}

function validEmail(email) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(email).search(filter) != -1;
}

function validNIA(nia){
	if(nia.substring(0,3) != 100){
		alert("NIA no válido");
		return false;
	}
	if(nia.length < 9 || isNaN(nia)){
		alert("NIA debe contener 9 números.");
		return false;
	}
	return true;
}

function validPassword(pass){
	if(pass.length > 8){
		alert("Contraseña demasiado corta");
		return false;
	}

	//Queda comprobar que contenga a-z A-Z y 0-9
}

function validDate(date){
	//Comprobar que la fecha es anterior a minimo 17 años atrás
}

// ====== FUNCTION COOKIE REGISTER ====== //

function registrarUsuario(){

	//boolean checkEmail = validEmail(this.email);
	//boolean checkNIA = validNIA(this.nia);
	//boolean checkPassword = validPassword(this.registerPassword);
	if(checkEmail && checKNIA && checkPassword){

		//Crear cookie
	}

}