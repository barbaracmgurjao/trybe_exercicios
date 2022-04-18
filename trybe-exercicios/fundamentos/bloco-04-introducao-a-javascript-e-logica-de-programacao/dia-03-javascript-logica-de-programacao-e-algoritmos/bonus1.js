let n = 5;
let linha = "";
for(let c = 0; c < n; c += 1){
    for(let l = 0; l < n; l += 1){
        linha = linha + "*";
    }
    console.log(linha);
    linha = "";
}
