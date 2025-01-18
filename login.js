function logar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

   
    if (login === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    
    var usuarioArmazenado = localStorage.getItem("usuario");
    var senhaArmazenada = localStorage.getItem("senha");

   
    if (login === usuarioArmazenado() && senha === senhaArmazenada) {
        window.location.href = "home.html";  
        alert("Você logou na conta: " + usuarioArmazenado);  
    } else {
        alert("Usuário ou senha incorretos");
    }
}

