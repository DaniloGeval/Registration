function checking() {
    var username = document.getElementById('username').value;
    var userpass1 = document.getElementById('pass1').value;
    var userpass2 = document.getElementById('pass2').value;

    if (username === '' || userpass1 === '' || userpass2 === '') {
        alert("Заповніть всі поля!");
    } else if (userpass1 !== userpass2) {
        alert("Паролі не збігаються!");
    } else {
        window.open("done.html");
    }
}