function register(user_name, email, password) {
    let userDetails = { name: user_name, email: email, password: password };
    console.log(userDetails);
    // let url = "https://shopping-app-rest-api.herokuapp.com/addUser";
    let url = "http://localhost:3000/addUser";

    axios.post(url, userDetails).then(response => {
        let registerData = response;
        console.log(registerData);
        document.querySelector("#message").innerHTML = "User Added Successfully";
        if (registerData) {

            window.location.href = "login.html";
        }
        else {
            window.location.href = "registration.html";
        }
    }).catch(err => {
        let error = err.response.data.message;
        console.error(error);
        document.querySelector("#message").innerHTML = error;
    })

}
function registerSubmit() {
    let user_name = document.querySelector("#user_name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    register(user_name, email, password);
}

document.querySelector("#submitBtn").addEventListener('click', event => {
    event.preventDefault();
    registerSubmit();
})