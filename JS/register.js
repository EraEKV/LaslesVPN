


const div = document.getElementById("register_window")
const eye = document.getElementById("password_eye")

function openRegisterWindow() {
    div.classList.add("active")
}

function closeRegisterWindow() {
    div.classList.remove("active")
}


eye.addEventListener("click", function showPassword() {
    const input = document.getElementById("pass_input")
    if(input.type == "password") {
        input.type = "text"
    }
    else {
        input.type = "password"
    }
})










