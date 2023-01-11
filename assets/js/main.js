const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let tempo;

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('iniciar')){

        relogio.classList.remove('pausado');
        clearInterval(tempo);
        startRelogio();

    }
    
    if (el.classList.contains('pausar')){

        clearInterval(tempo);
        relogio.classList.add('pausado');

    }

    if (el.classList.contains('zerar')){

        clearInterval(tempo);
        relogio.innerHTML = '00:00:00';
        segundos = 0;

    }
});

function startRelogio(){

    tempo = setInterval(function(){
        segundos ++;
        relogio.innerHTML = horaPorSegundo(segundos);
    }, 1000);

}

function horaPorSegundo(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}