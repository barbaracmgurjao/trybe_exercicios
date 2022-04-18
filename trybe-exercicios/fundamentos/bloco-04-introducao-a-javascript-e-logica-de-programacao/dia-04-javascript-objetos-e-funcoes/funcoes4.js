function maiorPalavra(array){
    let maior = "";
    for(i in array){
        if(array[i].length > maior.length){
            maior = array[i];
        }
    }
    return(maior);
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));