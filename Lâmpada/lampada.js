const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lampa = document.getElementById ('lampa');

/*Verificação de lampadaQuebrada*/
function islampaBroken(){
    return lampa.src.indexOf('quebrada') > -1
}

/*Ligar*/function lampaOn(){
    if (!islampaBroken()){
        lampa.src = './imagens/lampada-acesa.jpg';
    }
}

/*Desligar*/function lampaOff(){
    if (!islampaBroken ()){
        lampa.src = './imagens/lampada-apagada.jpg';
    }
}

/*Quebrar*/function lampaBroken(){
    lampa.src = './imagens/lampada-quebrada.jpg';
}


/*Chamada de eventos*/
turnOn.addEventListener('click', lampaOn);
turnOff.addEventListener('click', lampaOff);
lampa.addEventListener('mouseover', lampaOn);
lampa.addEventListener('mouseleave', lampaOff);
lampa.addEventListener('dblclick', lampaBroken);