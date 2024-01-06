
let signupb = document.getElementById("signupb");
let signinb = document.getElementById("signinb");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinb.onclick = function(){

    nameField.style.maxHeight ="0";
    title.innerHTML = "Sign In";
    signupb.classList.add("disable");
    signinb.classList.remove("disable");
}

signupb.onclick = function(){

    nameField.style.maxHeight ="60px";
    title.innerHTML = "Sign Up";
    signupb.classList.remove("disable");
    signinb.classList.add("disable");
}