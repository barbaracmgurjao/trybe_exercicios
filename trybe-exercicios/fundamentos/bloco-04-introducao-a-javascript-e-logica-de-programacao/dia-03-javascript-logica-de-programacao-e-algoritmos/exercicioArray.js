let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = "";
for(i = 0; i < array.length; i += 1){
    if(array[i].length > maiorPalavra.length){
        maiorPalavra = array[i];
    }
}
console.log(maiorPalavra);

let menorPalavra = maiorPalavra;
for(i = 0; i < array.length; i += 1){
    if(array[i].length < menorPalavra.length){
        menorPalavra = array[i];
    }
}

console.log(menorPalavra);