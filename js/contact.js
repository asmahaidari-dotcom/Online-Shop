const email = document.getElementById("email");
const error = document.getElementById("emailError");

function validateForm(){

    if(email.value === ""){

        email.classList.add("error");

        error.innerText = "Email address is required";

        return false;
    }

}