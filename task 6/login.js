function validateForm(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let conPassword = document.getElementById("conPassword").value

    if (name == ""){
        alert("Please enter your name")
        return false;
    }
    else if(email == ""){
        alert("Please enter email")
        return false;
    }
    else if(!email.includes("@") || !email.includes(".")){
        document.getElementById("checkEmail").innerHTML = "Please enter valid email";
        document.getElementById("email").classList.add("email-input")
        return false;
    }    
    else if(password == ""){
        alert("Please enter password")
        return false;
    }
    else if(conPassword == ""){
        alert("Please enter confirm password")
        return false;
    }
    else if(password != conPassword){
        alert("password does not match")
        return false;
    }
    else{
        alert("Form successfully submited")
        document.getElementById("myForm").reset();
        return true;
    };

}
