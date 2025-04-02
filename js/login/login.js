function showLogin() {
    document.getElementById("loginForm").style.display = "flex";
    document.getElementById("registerForm").style.display = "none";
    
    document.getElementById("loginBtn").classList.add("active_l");
    document.getElementById("loginBtn").classList.remove("inactive_l");

    document.getElementById("registerBtn").classList.add("inactive_l");
    document.getElementById("registerBtn").classList.remove("active_l");
}

function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "flex";

    document.getElementById("registerBtn").classList.add("active_l");
    document.getElementById("registerBtn").classList.remove("inactive_l");

    document.getElementById("loginBtn").classList.add("inactive_l");
    document.getElementById("loginBtn").classList.remove("active_l");
}
