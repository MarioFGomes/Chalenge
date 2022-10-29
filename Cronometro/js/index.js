const relogio=document.querySelector('.relogio');
const Iniciar=document.querySelector('.Iniciar');
const Pausar=document.querySelector('.Pausar');
const Zerar=document.querySelector('.Zerar');
let segundo = 0;
let timer;


function criaHoraSegundo(segundo){
    const data=new Date(segundo*1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone:'UTC'
    });

    
} 

function IniciarRelogio() {
    timer = setInterval(() => {
        segundo++;
        relogio.innerHTML=criaHoraSegundo(segundo)
    },1000)
}

document.addEventListener('click', (e) => {
    
    const el = e.target;
    if (el.classList.contains('Iniciar')) {
        IniciarTimer();
    } else if(el.classList.contains('Pausar')){
            PausarTimer();
    } else if (el.classList.contains('Zerar')) {
        ZerarTimer();
    }
})


function IniciarTimer() {
    relogio.classList.remove('pausado')
    clearInterval(timer);
    IniciarRelogio();
}


function PausarTimer() {
     relogio.classList.add('pausado')
    clearInterval(timer);
}

function ZerarTimer() {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    segundo=0
    relogio.innerHTML = '00:00:00';
}
