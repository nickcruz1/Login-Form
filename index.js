function login() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (
    (username.value.toUpperCase() == "NICK") &
    (password.value.toUpperCase() == "CRUZ")
  ) {
    setTimeout(alertS, 1000);
    username.style.border = "";
    password.style.border = "";
  } else {
    setTimeout(alertE, 1000);
    username.style.border = "";
    password.style.border = "";
  }
}

function alertE() {
  alert(
    "Incorrect LogIn Information! Please Correct Username/Password And Try Again"
  );
  username.value = "";
  password.value = "";
  username.style.border = "2px solid red";
  password.style.border = "2px solid red";
}

function alertS() {
  alert("User Successfully Logged In");
  username.value = "";
  password.value = "";
  username.style.border = "2px solid lightgreen";
  password.style.border = "2px solid lightgreen";
}
