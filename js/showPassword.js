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