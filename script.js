//Função que cria um relógio digital
function tempoReal() {
    //Cria uma variável que recebe a data e hora atual
    var date = new Date();

    //a data tem um tipo único, portanto, a hora é convertida em String
    //Se o comprimento da variável for menor que 2 ex: 1:20
    if(date.getHours().toString().length < 2) {
        //É adicionado um zero à esquerda para ficar 01:20
        document.getElementById('hora').innerHTML = "<h1>0" + date.getHours() + ":" + date.getMinutes() + "</h1>";
    }
    //Faz o mesmo mas com minutos
    else if(date.getMinutes().toString() < 2) {
        document.getElementById('hora').innerHTML = "<h1>" + date.getHours() + ":0" + date.getMinutes() + "</h1>";
    }
    //Se a hora e o minuto for parecido com 12:20, não é adicionado nada
    else {
        document.getElementById('hora').innerHTML = "<h1>" + date.getHours() + ":" + date.getMinutes() + "</h1>";
    }

    //Intervalo de 1 seg para executar a função novamente e atualizar o horário atual
    setInterval("tempoReal()", 1000);
}