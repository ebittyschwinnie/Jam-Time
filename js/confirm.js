console.log('confirm.js is plugged in'); //test

function changePic(interval, frames) {
    var int = 2;
    
    function func() {
        document.body.id = "c" + int;
        int++;
        if(int === frames) { int = 1; }
    }
    
    var swap = window.setInterval(func, interval);
}
changePic(5000, 3);


var checkForAddress = JSON.parse(window.localStorage.getItem('takeAddress'));
console.log(checkForAddress);