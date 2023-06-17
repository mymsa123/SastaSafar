const wrapper = document.querySelector(".wrapper");
const signUpLink = document.querySelector(".signUp-link");
const signInLink = document.querySelector(".signIn-link");
const signupForm = document.querySelector(".form-wrapper.sign-up form");
const signinForm = document.querySelector(".form-wrapper.sign-in form");

signUpLink.addEventListener("click", () => {
    wrapper.classList.add("animate-signIn");
    wrapper.classList.remove("animate-signUp");
});

signInLink.addEventListener("click", () => {
    wrapper.classList.add("animate-signUp");
    wrapper.classList.remove("animate-signIn");
});


signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const username = signupForm.elements["username"].value;
    const email = signupForm.elements["email"].value;
    const password = signupForm.elements["password"].value;

    const storedUser = JSON.parse(localStorage.getItem(username));
    
    if(storedUser){
        alert("User already exists. Please login.");
        signInLink.click();
    }
    else{
        localStorage.setItem(username, JSON.stringify({email, password}));
        alert("Successfully created account. You can now log in.");
        signupForm.reset();
        signInLink.click();
    }
});

signinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = signinForm.querySelector("input[type='text']").value;
    const password = signinForm.querySelector("input[type='password']").value;

    const storedUser = JSON.parse(localStorage.getItem(username));

    if(username==="admin" && password==="admin"){
        window.location.href = "admin/admin.html";
    }
    else{
        if(storedUser){
            if(password === storedUser.password){ 
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("currentUser", username);
                window.location.href = "index.html";
            }
            else {
                alert("Invalid password.");
            }
        }
        else{
            alert("User does not exist. Please sign up.");
            signinForm.reset();
            signUpLink.click();
        }
    }
})


function togglePassword(passwordInputId){
    var passwordInput = document.getElementById(passwordInputId);
    var type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
}