function logar(email, senha){
    return fetch("http://localhost:3333/usuarios/logar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        emailAPI: email,
        senhaAPI: senha
      }),
    })
}
function valiEntrar(){
    let emailVali = false;
    let senhaVali = false;
    let email = document.getElementById("input_emailL").value;
    let senha = document.getElementById("input_senhaL").value;

    if(email == ""){
        alert("Insira seu e-mail");
        return
    }
    if(senha == ""){
        alert("Insira sua senha");
        return
    }
    
    logar(email, senha)
        .then(res => {
            if (res.ok) {
                alert("Login realizado com sucesso!");
                window.location.href = "home.html";
            } else {
            alert("Erro ao logar!");
            }
        })
        .catch(err => {
            alert("Erro na comunicação com o servidor!");
        });
}