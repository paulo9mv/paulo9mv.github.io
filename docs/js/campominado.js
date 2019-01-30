var text = document.getElementById("textocampominado");

var m;
var s;
var mm;

var intervalo;

var qtdcampos = 81;
var nbombas = 10;
var row_limit = 9;
var column_limit = 9;

var minado = new Minado();

function checar(a){
  var i = a.parentNode.rowIndex;
  var j = a.cellIndex;

  var indice = i*9 + j;

  if(minado.casas[indice] != '*'){
    if(minado.casas[indice] != '*' && minado.casas[indice] != 0){
      campos[indice].innerText = minado.casas[indice];
      if(minado.revelado[indice] == 0){
        minado.revelado[indice] = 1;
        minado.revelados++;
      }
    }
    else if(minado.casas[indice] == 0 && minado.revelado[indice] == 0)
    adjacente(i,j);
    checkwin();
  }
  else
  endgame();

}

function checkwin(){
  if(minado.revelados == (qtdcampos - nbombas)){
    clearInterval(intervalo);
    for(var i = 0; i < qtdcampos; i++)
    campos[i].onclick=function(){};

    text.innerText = "Você venceu! Seu tempo foi de " + text.innerText;
  }
}
function endgame(){
  for(var i = 0; i < 81; i++){
    if(minado.casas[i] == '*')
    campos[i].innerHTML = '<i class="fas fa-bomb"></i>';

    campos[i].onclick=function(){};
  }
  clearInterval(intervalo);
  text.innerText = "Você perdeu! Seu tempo foi de " + text.innerText;
}

function adjacente(i,j){
  campos[i*9 + j].innerText = minado.casas[i*9 + j];

  if(minado.revelado[i*9+j] == 0){
    minado.revelado[i*9+j] = 1;
    minado.revelados++;
  }

  if(row_limit-1 > 0)
    for(var x = Math.max(0, i-1); x <= Math.min(i+1, row_limit-1); x++)
      for(var y = Math.max(0, j-1); y <= Math.min(j+1, column_limit-1); y++)
        if((x != i || y != j) && minado.revelado[x*9 + y] == 0){
          campos[x*9 + y].innerText = minado.casas[x*9 + y];
          if(minado.revelado[x*9+y] == 0){
            minado.revelado[x*9+y] = 1;
            minado.revelados++;
          }
          if(minado.casas[x*9+y] == 0)
          adjacente(x,y);
        }
}


function iniciar(){
  minado.gerar();

  var a = document.getElementById("icone");
  a.className = "far fa-flag";

  for(var i = 0; i < qtdcampos; i++){
    campos[i].innerText = "";
    campos[i].onclick = function(){
      checar(this);
    };
  }

  m = 0;
  s = 0;
  mm = 0;
  clearInterval(intervalo);
  intervalo = 0;

  intervalo = window.setInterval(function(){
    if (mm == 100) { s++; mm = 0; }
    if (s == 60) { m++; s = 0;}
    if (m < 10)
    text.innerText = "0" + m + "m:";
    else
    text.innerText = m + "m:";
    if (s < 10)
    text.innerText = text.innerText + "0" + s + "s:";
    else text.innerText = text.innerText + s + "s:";
    if (mm < 10)
    text.innerText = text.innerText + "0" + mm;
    else
    text.innerText = text.innerText + mm;

    mm = mm + 1;
  }, 10);
}
function trocar(){

  var a = document.getElementById("icone");

  if(a.className == "far fa-flag"){
    console.log("Marcando");
    a.className = "fas fa-flag";
    for(var i = 0; i < qtdcampos; i++){
      campos[i].onclick=function(){
        marcar(this);
      };
    }
  }
  else{
    a.className = "far fa-flag";
    for(var i = 0; i < qtdcampos; i++)
    campos[i].onclick = function(){
      checar(this);
    };
  }
}
function marcar(a){
  var i = a.parentNode.rowIndex;
  var j = a.cellIndex;

  var indice = i*9 + j;

  if(minado.revelado[indice] == 0){
    campos[indice].innerHTML = '<i class="fas fa-flag"></i>';
    console.log("nao foi revelado");
  }
}
