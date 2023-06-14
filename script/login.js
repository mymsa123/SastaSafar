const wrapper = document.querySelector(".wrapper");
const signUpLink = document.querySelector(".signUp-link");
const signInLink = document.querySelector(".signIn-link");
const signinForm = document.querySelector(".form-wrapper sign-up");

signUpLink.addEventListener("click", () => {
    wrapper.classList.add("animate-signIn");
    wrapper.classList.remove("animate-signUp");
});

signInLink.addEventListener("click", () => {
    wrapper.classList.add("animate-signUp");
    wrapper.classList.remove("animate-signIn");
});
