
//Links visuais
var botaoLancarDado = document.querySelector("#botao-lancar-dado")
var botaoPassarVez = document.querySelector("#botao-passar-vez")
var botaoNovoJogo = document.querySelector("#botao-novo-jogo")
var pontuacaoRodada0 = document.querySelector('#pontuacao-rodada-0')
var pontuacaoRodada1 = document.querySelector('#pontuacao-rodada-1')
var pontuacaoGlobal0 = document.querySelector('#pontuacao-global-0')
var pontuacaoGlobal1 = document.querySelector('#pontuacao-global-1')

var nomeJogador0 = document.querySelector('#nome-jogador-0')
var nomeJogador1 = document.querySelector('#nome-jogador-1')

// Variaveis Logicas
var pontuacao = [0, 0]
var pontuacaoRodada = 0
var jogadorAtual = 0
var pontuacoesGlobais = [pontuacaoGlobal0, pontuacaoGlobal1]
var pontuacoesRodadas = [pontuacaoRodada0, pontuacaoRodada1]
var nomesJogadores = [nomeJogador0, nomeJogador1]

function passarVez(){
    nomesJogadores[jogadorAtual].classList.remove("active");
    jogadorAtual = 1 - jogadorAtual
    nomesJogadores[jogadorAtual].classList.add("active");
}

function resetarJogo(){
    pontuacao = [0, 0]
    pontuacaoAtual = 0
    // Randomizar jogador
    var proximoJogador = Math.floor(Math.random() * 2)
    jogadorAtual = proximoJogador
    // Passar vez para ativar o active
    passarVez()
    pontuacoesGlobais[0].textContent = ""
    pontuacoesGlobais[1].textContent = ""
    pontuacoesRodadas[0].textContent = ""
    pontuacoesRodadas[1].textContent = ""
}

function vencerJogo(){
    Swal.fire({
        title: 'Parabéns',
        text:'Jogador '+(jogadorAtual+1)+' venceu o jogo!',
        confirmButtonText: 'Novo Jogo',
        width: 600,
        padding: '3em',
        background: '#fff',
        backdrop: `
          rgba(0,0,0,0.4)
          left top
          no-repeat
        `
      }).then(function(isConfirm) {resetarJogo()})
}

function lancarDado(){
    var dado = Math.floor(Math.random() * 6) + 1;
    if (dado==1){
        pontuacao[jogadorAtual] = 0
        pontuacoesRodadas[jogadorAtual].textContent = 0
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual]
        passarVez()
    }
    else{
        pontuacao[jogadorAtual] += dado
        pontuacoesRodadas[jogadorAtual].textContent = dado
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual]
        if(pontuacao[jogadorAtual] >= 30)
            vencerJogo()
    }
}

botaoNovoJogo.addEventListener("click", function (){
    resetarJogo()
})
botaoPassarVez.addEventListener("click", function () {
    passarVez()
})
botaoLancarDado.addEventListener("click", function () {
    lancarDado()
})