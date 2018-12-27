class Minado{
  constructor(){
  this.casas = [];
  this.zerar();
  }
  zerar(){
    for(var i = 0; i < 81; i++){
      this.casas[i] = 0;
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
    for(var i = 0; i < 9; i++){
      for(var j = 0; j < 9; j++){
      if(minado.casas[i*9 + j] == '*'){

        var row_limit = 8;
        if(row_limit > 0){
          var column_limit = 8;
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
  var linha = a.parentNode.rowIndex;
  var coluna = a.cellIndex;

  var indice = linha*9 + coluna;

  if(minado.casas[indice] != '*'){
    campos[indice].innerText = minado.casas[indice];
  }

  console.log(indice);
}

function gerar(){
  minado.gerar();
  console.log("Gerado");
  console.log(campos.length);

  console.log("Preenchido");
}
