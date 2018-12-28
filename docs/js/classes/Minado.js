class Minado{
  constructor(){
    this.casas = [];
    this.revelado = [];
    this.revelados = 0;
    this.zerar();
    console.log("Construido");
  }

  //Inicializa todas as posicões com zero
  zerar(){
    for(var i = 0; i < qtdcampos; i++){
      this.casas[i] = 0;
      this.revelado[i] = 0;
    }
    this.revelados = 0;
  }

  //Gera as minas aleatórias
  gerar(){
    this.zerar();

    for(var i = 0; i < nbombas;){
      let rand = Math.floor(Math.random() * 81);
      if(minado.casas[rand] != '*'){
        minado.casas[rand] = '*';
        i++;
      }
    }
    this.preencher();
  }
  //Preenche as posições adjacentes
  preencher(){
    for(let i = 0; i < row_limit; i++)
      for(let j = 0; j < column_limit; j++)
        if(minado.casas[i*9 + j] == '*')
          if(row_limit-1 > 0)
            for(let x = Math.max(0, i-1); x <= Math.min(i+1, row_limit-1); x++)
              for(let y = Math.max(0, j-1); y <= Math.min(j+1, column_limit-1); y++)
                if((x != i || y != j) && minado.casas[x*9 + y] != '*')
                  minado.casas[x*9 + y] += 1;
  }
}
