function validateForm(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let conPassword = document.getElementById("conPassword").value

    if (name == ""){
        alert("Please enter your name")
    }
    else if(password == ""){
        alert("Please enter password")
    }
    else if(conPassword == ""){
        alert("Please enter confirm password")
    }
    else if(password != conPassword){
        alert("password does not match")
    }
    else{
        alert("Form successfully submited")
    }
    //To check email
    if (email == ""){
        document.getElementById("checkEmail").innerHTML = "please enter your email";
        document.getElementById("email").classList.add("email-input")
    }
    else if(!email.includes("@")){
        document.getElementById("checkEmail").innerHTML = "Email must contain @";
        document.getElementById("email").classList.add("email-input")
    }
    else{
        document.getElementById("checkEmail").innerHTML = "";
        document.getElementById("email").classList.remove("email-input")

    }
}

