

    function limpar(){
        for(var i = 0; i < cells.length; i++){
            cells[i].innerText = "";
        }
    }

    function resolver(){

            var a = solucionar(0);
        if(a==0)
            console.log("impossivel");
            else {
                console.log("possivel");
            }
    }


    function checazero(){

        for(var j=0;j<81;j++){
            if(cells[j].innerText=="")
                return false;
            }
        return true;
    }
    function identificaquadrante(indice){

        var coluna = indice % 9;
        var linha = parseInt(indice/9);

        if(linha<=2&&coluna<=2)
            return 1;
        else if(linha<=2&&coluna>=3&&coluna<=5)
            return 2;
        else if(linha<=2&&coluna>=6)
            return 3;
        else if(linha>=3&&linha<=5&&coluna<=2)
            return 4;
        else if(linha>=3&&linha<=5&&coluna>=3&&coluna<=5)
            return 5;
        else if(linha>=3&&linha<=5&&coluna>=6)
            return 6;
        else if(linha>=6&&coluna<=2)
            return 7;
        else if(linha>=6&&coluna>=3&&coluna<=5)
            return 8;
        else
            return 9;
    }
    function checaquadrante(valor, indice){

        var quadrante = identificaquadrante(indice);
        var coluna = linha % 9;
        var linha = parseInt(linha/9) + 1;
        var qtdvalor = 0;
        var i, j;

        switch(quadrante){
        case 1:
            for(i=0;i<3;i++){
                for(j=0;j<3;j++){
                    if(cells[i*9 + j].innerText==valor)
                        qtdvalor++;
                }
            }
            if(qtdvalor!=1)
                return 0;
            break;
        case 2:
            for(i=0;i<3;i++){
                for(j=3;j<6;j++){
                    if(cells[i*9 + j].innerText==valor)
                        qtdvalor++;
                }
            }
            if(qtdvalor!=1)
                return 0;
            break;
        case 3:
            for(i=0;i<3;i++){
                for(j=6;j<9;j++){
                    if(cells[i*9 + j].innerText==valor)
                        qtdvalor++;
                }
            }
            if(qtdvalor!=1)
                return 0;
            break;
        case 4:
            for(i=3;i<6;i++){
                for(j=0;j<3;j++){
                    if(cells[i*9 + j].innerText==valor)
                        qtdvalor++;
                }
            }
            if(qtdvalor!=1)
                return 0;
            break;
        case 5:
            for(i=3;i<6;i++){
                for(j=3;j<6;j++){
                    if(cells[i*9 + j].innerText==valor)
                        qtdvalor++;
                }
            }
            if(qtdvalor!=1)
                return 0;
            break;
        case 6:
            for(i=3;i<6;i++){
                for(j=6;j<9;j++){
                    if(cells[i*9 + j].innerText==valor)
                        qtdvalor++;
                }
            }
            if(qtdvalor!=1)
                return 0;
            break;
        case 7:
            for(i=6;i<9;i++){
                for(j=0;j<3;j++){
                    if(cells[i*9 + j].innerText==valor)
                        qtdvalor++;
                }
            }
            if(qtdvalor!=1)
                return 0;
            break;
        case 8:
            for(i=6;i<9;i++){
                for(j=3;j<6;j++){
                    if(cells[i*9 + j].innerText==valor)
                        qtdvalor++;
                }
            }
            if(qtdvalor!=1)
                return 0;
            break;
        case 9:
            for(i=6;i<9;i++){
                for(j=6;j<9;j++){
                    if(cells[i*9 + j].innerText==valor)
                        qtdvalor++;
                }
            }
            if(qtdvalor!=1)
                return 0;
        }
        return 1;
    }
    function possivel(valor,indice){
        var i,j;
        var N = 9;

        var coluna = indice % 9;
        var linha = parseInt(indice/9) + 1;


        for(j=0;j<N;j++){
            if(cells[(linha-1)*9 + j].innerText==valor&&j!=coluna){ ///checa a linha
                return 0;
            }
        }
        for(i=0;i<N;i++){

            if(cells[i*9 + coluna].innerText==valor && i != (linha-1)){

                return 0;
            }
        }
        if(checaquadrante(valor,indice)==1){
            return 1;
        }

        return 0;
    }
    function solucionar(indice){


        var coluna = indice % 9;
        var linha = parseInt(indice/9) + 1;

        if(indice == 81)
            return 0;

        if(checazero())
            return 1;

        if(cells[indice].innerText != ""){


                if(solucionar(indice+1)==1){

                    return 1;
                }
        }
        else{

        for(var i=1;i<=9;i++){

            cells[indice].innerText = i;


            if(possivel(i,indice)){
                    if(solucionar(indice+1)==1){
                        return 1;
                    }

            }else{

                cells[(linha-1)*9 + coluna].innerText="";
            }
        }

        cells[(linha-1)*9 + coluna].innerText="";
        }
        return 0;
    }


    function increase(a){
        var txt = a.innerText;
        var num;

        if(txt == '?')
            num = 0;
        else
            num = Number(txt);

        if(num + 1 > 9)
            a.innerText = ' ';
        else
            a.innerText = num + 1;
        console.log(num);
    }
