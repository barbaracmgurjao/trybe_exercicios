let naoPrimos = [];
let divisores = 0;
let maiorNumeroPrimo = 1;
let ehPrimo = false;
for(let i = 2; i < 50; i += 1){
    for(let d = 1; d <= i; d += 1){
        if(i % d === 0){
            divisores += 1;
        }
    }
    if(divisores === 2){
        maiorNumeroPrimo = i;
    }
    divisores = 0;
}
console.log(maiorNumeroPrimo);