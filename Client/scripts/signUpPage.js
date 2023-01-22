let form = document.getElementById("form");
// let dataArr = JSON.parse(localStorage.getItem("userData")) || [];
const messageSignUp = document.getElementById("messageSignUp");
// Add a click event listener to the button
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  let dataObj = {
    firstName: form.input1.value,
    lastName: form.input2.value,
    email: form.input3.value,
    mobile: form.input4.value,
    password: form.input5.value,
  };

  await fetch("https://63c59ffce1292e5bea27a4a8.mockapi.io/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fname: dataObj.firstName,
      lname: dataObj.lastName,
      email: dataObj.email,
      password: dataObj.password,
      phone: dataObj.mobile,
    }),
  });
  console.log(dataObj);
  window.location.href = "loginPage.html";
  // localStorage.setItem("userData", JSON.stringify(dataArr));
});
