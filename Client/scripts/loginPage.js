// const inputdataArr = JSON.parse(localStorage.getItem("userData")) || [];
const messageLogin = document.getElementById("messageLogin");
const logo = document.getElementById("logo");
logo.style.cursor = "pointer";
logo.addEventListener("click", () => {
  window.location.href = "index.html";
});
let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  fetch("https://63c59ffce1292e5bea27a4a8.mockapi.io/users")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((user) => {
        console.log(user);
        if (user.email == "xyz@example.com" && user.password == "password") {
          messageLogin.textContent = "Login Successful!";
          setTimeout(() => {
            messageLogin.style.display = "none";
            window.location.href = "index.html";
          }, 3000);
        } else {
          messageLogin.textContent = "Incorrect Credentials!";
          setTimeout(() => {
            messageLogin.style.display = "none";
          }, 3000);
        }
      });
    });
  localStorage.setItem("isAuth", true);
  messageLogin.style.display = "block";
});

// to merge HOMEPAGE
// window.location.href= "hp.html"
