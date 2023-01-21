let inputdataArr = JSON.parse(localStorage.getItem("userData")) || [];

let loginForm = document.querySelector("#loginForm")
loginForm.addEventListener("submit", function(event){
    event.preventDefault()
    let flag = false;
    for(let i =0; i<inputdataArr.length;i++){
        if(loginForm.input01.value == inputdataArr[i].email && loginForm.input02.value == inputdataArr[i].Password ){
            flag = true;
    
        } 
    }
    if(flag==true){return alert("Login Successful")}
    else if(flag==false){
        return alert("Please Enter Correct Details")
    }
})


// to merge HOMEPAGE
// window.location.href= "hp.html"

