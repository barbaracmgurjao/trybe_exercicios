let n = 5;
let linha = "";
for(let c = n - 1; c >= 0; c -= 1){
    for(let l = 0; l < c; l += 1){
        linha = linha + " ";
    }
    for(let ast = 1; ast <= n - c; ast += 1){
        linha += "*";
    }
    console.log(linha);
    linha = "";
}
