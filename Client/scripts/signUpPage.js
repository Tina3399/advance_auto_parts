let form = document.getElementById("form");
// let dataArr = JSON.parse(localStorage.getItem("userData")) || [];
const messageSignUp = document.getElementById("messageSignUp");
// Add a click event listener to the button
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let dataObj = {
    firstName: form.input1.value,
    lastName: form.input2.value,
    email: form.input3.value,
    mobile: form.input4.value,
    password: form.input5.value,
  };
  console.log(dataObj.mobile, dataObj.mobile.length < 10);
  if (
    dataObj.firstName !== "" &&
    dataObj.lastName !== "" &&
    dataObj.email !== "" &&
    dataObj.mobile.length === 10 &&
    dataObj.password !== ""
  ) {
    window.location.href = "loginPage.html";
  } else {
    messageSignUp.textContent = "Please fill all the details!";
    setTimeout(() => {
      messageSignUp.style.display = "none";
    }, 3000);
  }
  console.log(dataObj);
  // dataArr.push(dataObj);
  messageSignUp.style.display = "block";

  fetch("https://63c59ffce1292e5bea27a4a8.mockapi.io/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fname: "firstname",
      lname: "lastname",
      email: "xyz@example.com",
      password: "password",
      phone: "phone",
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    });

  // localStorage.setItem("userData", JSON.stringify(dataArr));
});
