function welcomeUser() {
  var text = "";
  if (navigator.orderpage.html == true) {
      text = "You hungry, pal?";
    }
  document.getElementById("welcome").innerHTML = text;
}

function loadUserName() {
var user = localStorage.getItem('current login');
for (var index = 0; index < accounts.length; index++) {
     if (index == user) {
        var currentUser = accounts[index];
        document.getElementById('add-user-name').innerText = "Hi, " + currentUser.username + ", welcome back! Would you like to reorder one of your faves?";
        var faves = document.getElementById('fave-sandwiches');
        for (var sandwichIndex = 0; sandwichIndex < currentUser.favoriteSandwiches.length; sandwichIndex++) {
            var sandwichlist = document.createElement('p');
            var ingredient = currentUser.favoriteSandwiches[sandwichIndex];
            sandwichlist.innerText = ingredient.spreads + ", " + ingredient.jams + ", " + "& " + ingredient.toppings + " on " + ingredient.bread; 
            faves.appendChild(sandwichlist);
            }
        }
    }
}


window.onload = loadUserName();
var makeSammyButton = document.getElementById('makeSammy');


makeSandwich = function() {
    var checkedBread = document.getElementsByClassName('breads');
    for (var breadIndex = 0; breadIndex < checkedBread.length; breadIndex++) {
        if (checkedBread[breadIndex].checked == true) {
            var breadChoice = checkedBread[breadIndex].value;
            console.log(breadChoice);
        } 
    }
    var checkedSpreads = document.getElementsByClassName('spreads');
    for (var spreadIndex = 0; spreadIndex < checkedSpreads.length; spreadIndex++) {
        if (checkedSpreads[spreadIndex].checked == true) {
            var spreadChoice = checkedSpreads[spreadIndex].value;
            console.log(spreadChoice);
        } 
    }
    var checkedJams = document.getElementsByClassName('jams');
    for (var jamsIndex = 0; jamsIndex < checkedJams.length; jamsIndex++) {
        if (checkedJams[jamsIndex].checked == true) {
            var jamsChoice = checkedJams[jamsIndex].value;
            console.log(jamsChoice);
        } 
    }
    var checkedExtras = document.getElementsByClassName('extras');
    for (var extrasIndex = 0; extrasIndex < checkedExtras.length; extrasIndex++) {
        if (checkedExtras[extrasIndex].checked == true) {
            var extrasChoice = checkedExtras[extrasIndex].value;
            console.log(extrasChoice);
        } 
    }
    var checkedGrilled = document.getElementById('grilled');
        if (checkedGrilled.checked == true) {
            var grilledChoice = checkedGrilled.value;
            console.log(grilledChoice);
        } 
    var checkedCut = document.getElementsByClassName('cuts');
    for (var cutIndex = 0; cutIndex < checkedCut.length; cutIndex++) {
        if (checkedCut[cutIndex].checked == true) {
            var cutChoice = checkedCut[cutIndex].value;
            console.log(cutChoice);
        } 
    }
    var user = JSON.parse(localStorage.getItem('current login'));
    if (user == "guest") {
       accounts[0].addFaveSandwich(breadChoice, spreadChoice, jamsChoice, extrasChoice, grilledChoice, cutChoice); 
    }
    for(var index = 0; index < accounts.length; index++) {
        if (index == user) {
            var currentUser = accounts[index];
            currentUser.addFaveSandwich(breadChoice, spreadChoice, jamsChoice, extrasChoice, grilledChoice, cutChoice);
        }
    }
    localStorage.setItem('accounts', JSON.stringify(accounts));
    window.location.href = '../html/summary.html';
}
makeSammyButton.addEventListener("click", makeSandwich);

function sendOrder() {
    var newSandwich = document.forms[0];
    var txt = "";
    var i;
    for (i = 0; i < sandwiches.length; i++) {
        if (sandwiches[i].checked) {
            text = text + sandwiches[i].value + " ";
        }
    }
    document.getElementById("order").value = "You ordered a sammy with: " + txt;
}

