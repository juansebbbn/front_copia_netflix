function showLogin() {
    document.getElementById("loginForm").style.display = "flex";
    document.getElementById("registerForm").style.display = "none";
    
    document.getElementById("loginBtn").classList.add("active");
    document.getElementById("loginBtn").classList.remove("inactive");

    document.getElementById("registerBtn").classList.add("inactive");
    document.getElementById("registerBtn").classList.remove("active");
}

function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "flex";

    document.getElementById("registerBtn").classList.add("active");
    document.getElementById("registerBtn").classList.remove("inactive");

    document.getElementById("loginBtn").classList.add("inactive");
    document.getElementById("loginBtn").classList.remove("active");
}
