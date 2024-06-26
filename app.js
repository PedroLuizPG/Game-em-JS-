// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;
let chute = 0;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function colocarTextos() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

colocarTextos();

function verificarChute() {
  let chute = document.querySelector('input').value;
  tentativas++;
  
  console.log(numeroSecreto == chute);

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;

    exibirTextoNaTela('p', mensagemTentativas);

    document.getElementById('reiniciar').removeAttribute('disabled');
  }else if(chute < numeroSecreto) {
    exibirTextoNaTela('h1', 'Tente novamente!');
    exibirTextoNaTela('p', `O número é maior que ${chute}`);
    limparCampo();
  }else{
    exibirTextoNaTela('h1', 'Tente novamente!');
    exibirTextoNaTela('p', `O número é menor que ${chute}`);
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * 10 + 1);
  let quantidadeDeElementosEscolhidosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosEscolhidosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados); 
    return numeroEscolhido;
  }
  
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 0;
  colocarTextos();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}