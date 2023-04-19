const email = document.getElementById("email_sign");
const password = document.getElementById("pass_sign");
const loginButton = document.getElementById("submit_btn");

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

function checkPassword(str)
{
    let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}

loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (!validateEmail(email.value)) {
      email.value = "";
      email.setAttribute("placeholder", "Неверный формат")
      email.classList.add("error_input")
    } 
    else if (!checkPassword(password.value)) {
      email.classList.remove("error_input")
      password.value = "";
      password.setAttribute("placeholder", "Неверный формат")
      password.classList.add("error_input")
    }
    else {
      email.classList.remove("error_input");
      password.classList.remove("error_input");
      alert("You have successfully logged in.");
      location.reload();
    }
})
