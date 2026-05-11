function cadastrar(nome, email, senha){
    return fetch("http://localhost:3333/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeAPI: nome,
        emailAPI: email,
        senhaAPI: senha
      }),
    })
}
function Valicadastrar(){
    let nomeVali = false;
    let emailVali = false;
    let senhaVali = false;
    let confSenhaVali = false;

    let nome = document.getElementById("input_nome").value;
    let email = document.getElementById("input_email").value;
    let senha = document.getElementById("input_senha").value;
    let confSenha = document.getElementById("input_confSenha").value;
    
    if(nome == ""){
        alert(`Digite seu nome de usuário`);
        return
    }
    else{
        nomeVali = true;
    }

    if(email == ""){
        alert(`Digite seu email`);
        return
    }
    else{
        if (!email.includes("@") || !email.includes(".")) {
        alert("Email inválido.");
        return;
        } else {
            emailVali = true;
        }
    }

    if(senha == ""){
        alert("Insira uma senha")
        return
    }
    else{
        let caracter = ["!", "@", "#", "$", "%", "&"];
        let temCaractere = false;
        let temMaiuscula = false;
        let temMinuscula = false;
        
        if(senha.length < 8){
            alert("Insira no mínimo 8 dígitos");
            return
        }

        if(senha != senha.toLowerCase()){
            temMaiuscula = true;
        }
        else{
            alert("A senha precisa ter pelo menos uma letra maiúscula");
            return
        }

        if(senha!= senha.toUpperCase()){
            temMinuscula = true;
        }
        else{
            alert("A senha precisa ter pelo menos uma letra minúscula");
            return
        }

        for (let i = 0; i <= caracter.length - 1; i= i +1) {
            if (senha.includes(caracter[i])){
                temCaractere = true;
                break; 
            }
        }
        if (temCaractere == false) {
            alert("A senha precisa ter no mínimo um caractere especial");
            return;
        } 
        
        if(temCaractere == true && temMaiuscula == true && temMinuscula == true){
            senhaVali = true;
        }
    }

    if(senha != confSenha){
        alert("As senhas devem ser iguais");
        return
    }
    else{
        confSenhaVali = true;
    }
    
    if (nomeVali == true && emailVali == true && senhaVali == true && confSenhaVali == true) {
        cadastrar(nome, email, senha)
        .then(res => {
            if (res.ok) {
                alert("Cadastro realizado com sucesso!");
                window.location.href = "home.html";
            } else {
            alert("Erro ao cadastrar!");
            }
        })
        .catch(err => {
            alert("Erro na comunicação com o servidor!");
        });
    }
}
