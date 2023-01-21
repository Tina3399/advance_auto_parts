

let form = document.getElementById("form");
let dataArr = JSON.parse(localStorage.getItem("userData")) || [];


// Add a click event listener to the button
form.addEventListener("submit", function(event) {
    event.preventDefault()
    let dataObj = {
        firstName : form.input1.value,
        lastName  : form.input2.value,
        email     : form.input3.value,
        mobile    : form.input4.value,
        Password  : form.input5.value,

      };

      dataArr.push(dataObj)
      localStorage.setItem("userData",JSON.stringify(dataArr))
      window.location.href= "loginPage.html"

});
