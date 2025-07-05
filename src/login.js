"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("loginForm");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password")
            .value;
        if (!email || !password) {
            alert("Semua field harus diisi");
            return;
        }
        alert("Login berhasil sebagai ".concat(email));
    });
});
