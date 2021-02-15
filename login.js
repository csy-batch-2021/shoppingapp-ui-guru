function login(email, password) {
    let user = { email: email, password: password };

    let url = "https://shopping-app-rest-api.herokuapp.com/userLogin";
    // let url = "http://localhost:3000/userLogin";

    axios.post(url, user).then(response => {
        let userData = response.data;
        console.log(userData)
        localStorage.setItem("LOGGED_IN_USER", JSON.stringify(userData));
        document.querySelector("#message").innerHTML = "Successfully LoggedIn";
        if (response.role == "ADMIN") {

            window.location.href = "orders.html";
        }
        else {
            window.location.href = "list_products.html";
        }

    }).catch(err => {
        let error = err.response.data.message;
        console.error(error);
        document.querySelector("#message").innerHTML = error;
    });
}

function loginSubmit() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    // console.log(email,password);
    login(email, password);
}

document.querySelector("#submitBtn").addEventListener('click', event => {
    event.preventDefault();
    loginSubmit();
})

