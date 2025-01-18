function cadastro(){

    var usuario = document.getElementById("Usuario").value
    var senha = document.getElementById("password").value
    var confirmSenha = document.getElementById("confirmPassword").value
    var email = document.getElementById("email").value

    if(usuario === "" || senha === "" || confirmSenha === "" || email === "") {
        alert("Prencha os campos");
        return;
    }

    if(senha !== confirmSenha){
        alert("As senhas nao coindcidem");
        return;
    }

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("senha", senha);
    localStorage.setItem("email", email);
    
    window.location.href = ("home.html");
    alert("Sua conta foi criada");

}


