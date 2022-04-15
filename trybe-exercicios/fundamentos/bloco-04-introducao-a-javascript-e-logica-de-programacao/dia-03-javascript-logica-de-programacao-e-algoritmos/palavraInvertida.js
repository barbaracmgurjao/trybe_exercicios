let word = "tryber";
let palavraInvertida = "";
for(i = word.length - 1; i >= 0; i -= 1){
    palavraInvertida += word[i];
}
console.log(palavraInvertida);