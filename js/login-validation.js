// ====== Form Login Variables ====== //
const form = document.getElementById("loginForm");
const wmail = document.getElementById("inputEmailLogin");
const password = document.getElementById("inputPasswordLogin");
const errorElement = document.getElementById("error-log");


// ====== Read Cookie ====== //
function readCookie(){
	var x = document.cookie;
	return x;
}

// ====== Login check ====== //

function checkLogin(){

	form.addEventListener("submit", (e)=>{

		//Hago un registro para los mensajes de error
		let messages = [];


		if(messages.length > 0){
			e.preventDefault();
			errorElement.innerText = messages.join(', ');
		}
	});
}