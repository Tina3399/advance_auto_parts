const vaccines = document.getElementById("vaccines");
const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const incorrectCredentials = document.getElementById("incorrectCredentials");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let admin = {
    username: username.value,
    password: password.value,
  };
  if (admin.username === "Jayesh" && admin.password === "hotwheels") {
    incorrectCredentials.textContent = "Login Successful!";
  } else {
    incorrectCredentials.textContent = "Incorrect Credentials!";
  }
});

// form validation
