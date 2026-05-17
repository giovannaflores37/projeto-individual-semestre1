let listaPerguntas = [
    {
        pergunta: "Qual característica define melhor um Brawler da classe tanque?",
        alternativaA: "Alta vida e eficiência em combates de curta distância",
        alternativaB: "Ataques com grande alcance e precisão",
        alternativaC: "Capacidade de curar aliados constantemente",
        alternativaD: "Alto dano contínuo à distância",
        alternativaCorreta: "alternativaA"
    },

    {
        pergunta: "Por que Brawlers de longo alcance têm vantagem em mapas abertos?",
        alternativaA: "Possuem mais vida",
        alternativaB: "Conseguem atacar sem se expor tanto ao perigo",
        alternativaC: "Se movem mais rápido",
        alternativaD: "Causam mais dano automaticamente",
        alternativaCorreta: "alternativaB"
    },

    {
        pergunta: "Qual é a principal função de um Brawler suporte em equipe?",
        alternativaA: "Causar o maior dano possível sozinho",
        alternativaB: "Sempre iniciar as lutas",
        alternativaC: "Ajudar aliados com cura, buffs ou controle de área",
        alternativaD: "Jogar isolado do time",
        alternativaCorreta: "alternativaC"
    },

    {
        pergunta: "Por que Brawlers de curto alcance sofrem em mapas abertos?",
        alternativaA: "Não conseguem usar o Super",
        alternativaB: "São mais lentos",
        alternativaC: "Precisam se aproximar e ficam mais expostos a ataques",
        alternativaD: "Têm menos dano que os outros",
        alternativaCorreta: "alternativaC"
    },

    {
        pergunta: "No modo Pique-Gema, qual característica é mais importante para um Brawler que carrega muitas gemas?",
        alternativaA: "Velocidade máxima de movimento",
        alternativaB: "Capacidade de se manter vivo e recuar com segurança",
        alternativaC: "Ataques que atravessam paredes",
        alternativaD: "Alto dano explosivo para eliminar inimigos rapidamente",
        alternativaCorreta: "alternativaB"
    },

    {
        pergunta: "Qual dessas características está associada a Brawlers assassinos (ex: Leon, Edgar)?",
        alternativaA: "Alta resistência para absorver dano",
        alternativaB: "Ataques de longo alcance contínuo",
        alternativaC: "Capacidade de curar aliados constantemente",
        alternativaD: "Alto dano em curto tempo e foco em eliminar rapidamente um alvo",
        alternativaCorreta: "alternativaD"
    },

    {
        pergunta: "Qual é o principal objetivo no modo Pique-Gema?",
        alternativaA: "Controlar zonas específicas do mapa",
        alternativaB: "Coletar e manter 10 gemas até a contagem regressiva terminar",
        alternativaC: "Sobreviver o máximo de tempo possível",
        alternativaD: "Eliminar mais inimigos que o time adversário",
        alternativaCorreta: "alternativaB"
    },

    {
        pergunta: "No modo Caça-Estrelas (Bounty), qual atitude é mais estratégica quando seu time está na frente?",
        alternativaA: "Avançar agressivamente para aumentar a vantagem",
        alternativaB: "Se separar completamente da equipe",
        alternativaC: "Evitar riscos e jogar de forma mais defensiva",
        alternativaD: "Ignorar eliminações e focar no mapa",
        alternativaCorreta: "alternativaC"
    },

    {
       pergunta: "Em partidas competitivas, por que a escolha de Brawlers (draft/picks) é tão importante?",
       alternativaA: "Porque reduz o tempo de partida",
       alternativaB: "Porque impede o uso de habilidades inimigas",
       alternativaC: "Porque aumenta automaticamente o dano do time",
       alternativaD: "Porque define os pontos fortes e fracos contra o adversário",
       alternativaCorreta: "alternativaD"
    },
    
    {
        pergunta: "Por que escolher o Brawler certo para cada mapa é importante?",
        alternativaA: "Porque altera o tempo de recarga",
        alternativaB: "Porque define automaticamente o vencedor",
        alternativaC: "Porque muda a quantidade de vida do personagem",
        alternativaD: "Porque o layout favorece diferentes alcances e estilos de jogo",
        alternativaCorreta: "alternativaD"
    }
];

let respostaUsuario = [];
let acertos = 0;
let erros = 0;
let iAtual = 0;
let opcoes = document.getElementsByName("option");

function iniciarQuiz() {
    document.getElementById("inicio").classList.add("escondido");
    document.getElementById("quiz").classList.remove("escondido");
    mostrarPergunta();
}

function mostrarPergunta(){
    let perguntaAtual = listaPerguntas[iAtual];

    // número da questão
    document.getElementById("numeroQuestaoAtual").innerText = iAtual + 1;
    document.getElementById("qtdQuestoes").innerText = listaPerguntas.length;

    // pergunta
    document.getElementById("questaoExibida").innerText = perguntaAtual.pergunta;

    // alternativas
    document.getElementById("labelOpcaoUm").innerText = perguntaAtual.alternativaA;
    document.getElementById("labelOpcaoDois").innerText = perguntaAtual.alternativaB;
    document.getElementById("labelOpcaoTres").innerText = perguntaAtual.alternativaC;
    document.getElementById("labelOpcaoQuatro").innerText = perguntaAtual.alternativaD;

    acertos = 0;
    erros = 0;
    // acertos
    for (let i = 0; i < listaPerguntas.length; i++) {
        if (respostaUsuario[i] == listaPerguntas[i].alternativaCorreta) {
            acertos = acertos + 1;
        }
        else if(respostaUsuario[i] != undefined){
            erros = erros + 1;
        }
    }
    document.getElementById("numeroAcertos").innerText = acertos;
    document.getElementById("numeroErros").innerText = erros;

    // let opcoes = document.getElementsByName("option");

    for (let i = 0; i <= opcoes.length -1; i = i + 1) {
        opcoes[i].checked = false;
    }

    document.getElementById("butProxima").disabled = true;
}


for (let i = 0; i <= opcoes.length - 1; i = i + 1) {
    opcoes[i].addEventListener("change", function () {
        document.getElementById("butProxima").disabled = false;
    });
}

function proximaPergunta(){
    let respostaSelecionada = null;

    // pega qual foi marcada
    for (let i = 0; i <= opcoes.length - 1; i = i + 1) {
        if (opcoes[i].checked) {
            respostaSelecionada = opcoes[i].value;
        }
    }

    // impede avançar sem responder
    if (respostaSelecionada == null) {
        alert("Selecione uma opção!");
        return;
    }

    // salva a resposta
    respostaUsuario[iAtual] = respostaSelecionada;

    // passa pra próxima
    iAtual++;

    if (iAtual < listaPerguntas.length) {
        mostrarPergunta();
    } else {
        finalizarQuiz();
    }
}

function finalizarQuiz(){
    document.getElementById("quiz").classList.add("escondido");
    document.getElementById("final").classList.remove("escondido");

    let acertosF = 0;

    for (let i = 0; i < listaPerguntas.length; i++) {
        if (respostaUsuario[i] == listaPerguntas[i].alternativaCorreta) {
            acertosF = acertosF + 1;
        }
    }

    document.getElementById("acertosFinal").innerText = acertosF;
    document.getElementById("totalQuestoesFinal").innerText = listaPerguntas.length;

    // mensagem baseada no desempenho
    let mensagem = "";

    if (acertosF <= 3) {
        mensagem = "Você ainda está aprendendo... tente novamente e mostre sua força!";
    } 
    else if (acertosF <= 7) {
        mensagem = "Mandou bem! Continue treinando para virar uma lenda da arena!";
    } 
    else {
        mensagem = "INCRÍVEL! Você domina o Brawl Stars como um verdadeiro campeão!";
    }

    document.getElementById("mensagemFinal").innerText = mensagem;
}

function reiniciarQuiz(){
    // reseta as variaveis e a lista de respostas
    iAtual = 0;
    respostaUsuario = [];
    
    document.getElementById("final").classList.add("escondido");
    document.getElementById("inicio").classList.remove("escondido");
}