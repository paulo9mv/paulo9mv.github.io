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
    for(var i = 0; i < 10;){
      var rand = Math.floor(Math.random() * 81);
      if(minado.casas[rand] != '*'){
        minado.casas[rand] = '*';
        i++;
      }
    }
    console.log(minado);
    this.preencher();
  }
  preencher(){
    var row_limit = 8;
    var column_limit = 8;

    for(var i = 0; i < 9; i++){
      for(var j = 0; j < 9; j++){
      if(minado.casas[i*9 + j] == '*'){

        if(row_limit > 0){
          for(var x = Math.max(0, i-1); x <= Math.min(i+1, row_limit); x++){
            for(var y = Math.max(0, j-1); y <= Math.min(j+1, column_limit); y++){
              if((x != i || y != j) && minado.casas[x*9 + y] != '*'){
                minado.casas[x*9 + y] += 1;
                console.log("Adjacente " + (x*9 + y) + " " + (i*9+j));
              }
            }
          }
        }
      }
      }
    }
    console.log(minado.casas);
  }

}

var minado = new Minado();

function checar(a){
  var i = a.parentNode.rowIndex;
  var j = a.cellIndex;

  var indice = i*9 + j;

  if(minado.casas[indice] != '*' && minado.casas[indice] != 0){
    campos[indice].innerText = minado.casas[indice];
  }
  //// TODO: Definir quando clica na bomba
  else if(minado.casas[indice] == 0 && minado.revelado[indice] == 0){

    adjacente(i,j);


  }

  console.log(indice);
}

function adjacente(i,j){
  var row_limit = 8;
  var column_limit = 8;
  campos[i*9 + j].innerText = minado.casas[i*9 + j];
  minado.revelado[i*9+j] = 1;
  //i,j -> casa analisada
  //x,y -> casas adjacentes
  if(row_limit > 0){
    for(var x = Math.max(0, i-1); x <= Math.min(i+1, row_limit); x++){
      for(var y = Math.max(0, j-1); y <= Math.min(j+1, column_limit); y++){
        if((x != i || y != j) && minado.revelado[x*9 + y] == 0){
          campos[x*9 + y].innerText = minado.casas[x*9 + y];
          if(minado.casas[x*9+y] == 0)
            adjacente(x,y);
          console.log("Adjacente " + (x*9 + y) + " " + (i*9+j));
        }
      }
    }
  }
}

function gerar(){
  minado.gerar();
  console.log("Gerado");
  console.log(campos.length);

  console.log("Preenchido");
}
