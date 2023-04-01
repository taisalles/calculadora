var visor = document.getElementById('visor');
const number0 = document.getElementById('0');
const number1 = document.getElementById('1');
const number2 = document.getElementById('2');
const number3 = document.getElementById('3');
const number4 = document.getElementById('4');
const number5 = document.getElementById('5');
const number6 = document.getElementById('6');
const number7 = document.getElementById('7');
const number8 = document.getElementById('8');
const number9 = document.getElementById('9');
const opDivide = document.getElementById('div');
const opMulti = document.getElementById('multi');
const opSubtrai = document.getElementById('subtrai');
const opSoma = document.getElementById('soma');
const ponto = document.getElementById('.');
const calcula = document.getElementById('result');
const limparButton = document.getElementById('clear');
const exclui = document.getElementById('backspace');


function atualizaVisor(info){
    if(visor.value === 'error'){
        limpar();
    }
    visor.value += info;
}

function calcularResultado(){
    if(visor.value.length > 0 && eval(visor.value) != 'Infinity' && eval(visor.value) != '-Infinity'
     && eval(visor.value) != 'Undefined' && !isNaN(eval(visor.value))){
        visor.value = eval(visor.value);
    }else{
        visor.value = 'error';
    }

}

function excluir(){
    visor.value = visor.value.slice(0,-1);
}

function limpar(){
    visor.value = '';
}

number0.addEventListener('click', function(){ atualizaVisor(0);});
number1.addEventListener('click', function(){ atualizaVisor(1);});
number2.addEventListener('click', function(){ atualizaVisor(2);});
number3.addEventListener('click', function(){ atualizaVisor(3);});
number4.addEventListener('click', function(){ atualizaVisor(4);});
number5.addEventListener('click', function(){ atualizaVisor(5);});
number6.addEventListener('click', function(){ atualizaVisor(6);});
number7.addEventListener('click', function(){ atualizaVisor(7);});
number8.addEventListener('click', function(){ atualizaVisor(8);});
number9.addEventListener('click', function(){ atualizaVisor(9);});

opDivide.addEventListener('click', function(){ atualizaVisor('/');});
opMulti.addEventListener('click', function(){ atualizaVisor('*');});
opSubtrai.addEventListener('click', function(){ atualizaVisor('-');});
opSoma.addEventListener('click', function(){ atualizaVisor('+');});
ponto.addEventListener('click', function(){ atualizaVisor('.');});
calcula.addEventListener('click', calcularResultado);
limparButton.addEventListener('click', limpar);
exclui.addEventListener('click', excluir);