let numeroSecreto;
let tentativas;
function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random()* 100) + 1;
    console.log(numeroSecreto)
    tentativas = 6;
    document.getElementById('outChances').textContent = tentativas;
    document.getElementById('outErros').textContent = 0;
    document.getElementById('outDica').textContent = 'Dica: é um número de 1 a 100'
}
function verificarAposta(){
    let inputNumero = parseInt(document.getElementById('inNumero').value);
    if(isNaN(inputNumero) || inputNumero < 1 || inputNumero > 100){
        alert('Por favor, insira um numero valido de 1 a 100.');
        return;
    }
    tentativas--;
    document.getElementById('outChances').textContent= tentativas;
    if (inputNumero === numeroSecreto) {
        alert('Parabens! Voce acertou o numero!');
        reiniciarJogo();
    } else {
        if(tentativas === 0){
            alert('Suas chances acabaram. 0 numero secreto era' + numeroSecreto + '.')
            reiniciarJogo()
        }else{
        let dica = inputNumero < numeroSecreto ? 'maior' : 'menor'
        document.getElementById('outErros').textContent = 6 - tentativas;
        document.getElementById('outDica').textContent = 'Dica: 0 numero é' + dica + 'do que' + inputNumero + '.';
    }
}
}

function reiniciarJogo(){
    iniciarJogo();
    document.getElementById('inNumero').value = '';
}
document.getElementById('btnApostar').addEventListener('click' , verificarAposta);
document.getElementById('btnJogar').addEventListener('click' , reiniciarJogo);

window.onload = iniciarJogo;
