class Minado{
  constructor(){
    this.casas = [];
    this.revelado = [];
    this.zerar();
  }
  zerar(){
    for(var i = 0; i < 81; i++){
      this.casas[i] = 0;
      this.revelado[i] = 0;
    }
  }
  gerar(){
    this.zerar();
    for (var i = 0; i < campos.length; i++) {
      campos[i].onclick = function(){
        checar(this);
      };
    }
    for(var i = 0; i < nbombas;){
      var rand = Math.floor(Math.random() * 81);
      if(minado.casas[rand] != '*'){
        minado.casas[rand] = '*';
        i++;
      }
    }
    this.preencher();
  }
  preencher(){


    for(var i = 0; i < 9; i++){
      for(var j = 0; j < 9; j++){
        if(minado.casas[i*9 + j] == '*'){

          if(row_limit > 0){
            for(var x = Math.max(0, i-1); x <= Math.min(i+1, row_limit); x++){
              for(var y = Math.max(0, j-1); y <= Math.min(j+1, column_limit); y++){
                if((x != i || y != j) && minado.casas[x*9 + y] != '*'){
                  minado.casas[x*9 + y] += 1;
                }
              }
            }
          }
        }
      }
    }

  }
}
const nbombas = 10;
var row_limit = 8;
var column_limit = 8;

var minado = new Minado();

function checar(a){
  var i = a.parentNode.rowIndex;
  var j = a.cellIndex;

  var indice = i*9 + j;

  if(minado.casas[indice] != '*'){
    if(minado.casas[indice] != '*' && minado.casas[indice] != 0){
      campos[indice].innerText = minado.casas[indice];
      minado.revelado[indice] = 1;
    }

    else if(minado.casas[indice] == 0 && minado.revelado[indice] == 0)
      adjacente(i,j);

    checkwin();

  }
  else
  endgame();

}
function wingame(){
  clearInterval(intervalo);
  for(var i = 0; i < 81; i++)
  campos[i].onclick=function(){};

  text.innerText = "Você venceu! Seu tempo foi de " + text.innerText;
}
function checkwin(){
  let cont = 0;
  for(var i = 0; i < 81; i++){
    if(minado.revelado[i] == 0)
    cont++;
  }
  if(cont == nbombas)
  wingame();

}
function endgame(){
  for(var i = 0; i < 81; i++){
    if(minado.casas[i] == '*'){
      campos[i].innerText = minado.casas[i];
    }
    campos[i].onclick=function(){};
  }
  clearInterval(intervalo);
  text.innerText = "Você perdeu! Seu tempo foi de " + text.innerText;
}

function adjacente(i,j){
  var row_limit = 8;
  var column_limit = 8;
  campos[i*9 + j].innerText = minado.casas[i*9 + j];
  minado.revelado[i*9+j] = 1;

  if(row_limit > 0){
    for(var x = Math.max(0, i-1); x <= Math.min(i+1, row_limit); x++){
      for(var y = Math.max(0, j-1); y <= Math.min(j+1, column_limit); y++){
        if((x != i || y != j) && minado.revelado[x*9 + y] == 0){
          campos[x*9 + y].innerText = minado.casas[x*9 + y];
          minado.revelado[x*9+y] = 1;
          if(minado.casas[x*9+y] == 0)
            adjacente(x,y);
        }
      }
    }
  }
}
var m;
var s;
var mm;
var text = document.getElementById("textocampominado");
var intervalo;

function gerar(){
  minado.gerar();

  for(var i = 0; i < 81; i++)
  campos[i].innerText = "";

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
