// Authentication Page Tabs
const signupToggle = document.querySelector("#signup");
const loginToggle = document.querySelector("#login");
const signupForm = document.querySelector("#reg-form");
const loginForm = document.querySelector("#login-form");

loginToggle.addEventListener("click", function () {
    document.title = `Tick.it - Login`;
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    signupToggle.classList.remove("active");
    loginToggle.classList.add("active");
});
signupToggle.addEventListener("click", function () {
    document.title = `Tick.it - Register`;
    signupForm.style.display = "block";
    loginForm.style.display = "none";
    signupToggle.classList.add("active");
    loginToggle.classList.remove("active");
});
