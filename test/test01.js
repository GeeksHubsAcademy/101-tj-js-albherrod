function clasificaElementos(index) {
    var positivo = 0;
    var negativo = 0;
    var cero = 0;
    for(indice of index){

        if(indice > 0){
            positivo++;
        }
        else{
            if(indice < 0){
                
                negativo++;
            }else{
                
                cero++;
            }
        }
    }
    var positiveFix = parseFloat(positivo/index.length);
    var negativoFix = parseFloat(negativo/index.length);
    var ceroFix = parseFloat(cero/index.length);
    resultado = new Array(positiveFix.toFixed(4), negativoFix.toFixed(4), ceroFix.toFixed(4));
    console.log(resultado);
    return resultado;
    
}




module.exports = clasificaElementos;
