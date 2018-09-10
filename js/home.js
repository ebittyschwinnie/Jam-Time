var getRegistrationButton = document.getElementById('registerButton');
addUserAccount = function() {
    var username = document.getElementById('register-username').value;
    var password = document.getElementById('register-password').value;
    var lastName = document.getElementById('register-lastName').value;
    var firstName = document.getElementById('register-firstName').value;
    var phone = document.getElementById('register-phone').value;
    var address = document.getElementById('register-address').value;
    accounts.push(new UserAccount(username, password, firstName, lastName, phone, address));
    //call add to local storage function
}
getRegistrationButton.addEventListener("click", addUserAccount);

var getLoginButton = document.getElementById('loginButton');
loadOrderPage = function(){ 
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    for (var index = 0; index < accounts.length; index++) {
        if (username == accounts[index].username && password == accounts[index].password) {
            localStorage.setItem("current-login", JSON.stringify(accounts[index]));
            window.location.href = '../html/orderpage.html';
            // document.getElementById('welcome-msg').innerText = "Hiya, " + accounts[index].firstName + ", Welcome Back!";
            // var showSandwiches = document.getElementById('saved-sandwiches');
            break;
        } else {
            document.getElementById('not-a-match').innerText = "Username or password does not match";
        } 
    }
}
getLoginButton.addEventListener("click", loadOrderPage);