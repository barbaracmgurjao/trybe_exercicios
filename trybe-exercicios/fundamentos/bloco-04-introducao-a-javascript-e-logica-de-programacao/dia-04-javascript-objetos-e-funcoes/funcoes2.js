function posMaiorValor(array){
    let maior = 0;
    for(i in array){
        if(array[i] > maior){
            maior = array[i];
        }
    }
    return(array.indexOf(maior));
}

console.log(posMaiorValor([2, 3, 6, 7, 10, 1]));