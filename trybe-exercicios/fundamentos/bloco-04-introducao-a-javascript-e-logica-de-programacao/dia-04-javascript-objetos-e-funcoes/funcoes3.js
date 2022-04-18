function posMenorValor(array){
    let menor = 0;
    for(i in array){
        if(array[i] < menor){
            menor = array[i];
        }
    }
    return(array.indexOf(menor));
}

console.log(posMenorValor([2, 4, 6, 7, 10, 0, -3]));