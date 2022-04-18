function verificaPalindrome(string){
    let palavraArray = [];
    for(let i in string){
        palavraArray.push(string[i]);
    }
    if(palavraArray.toString() === (palavraArray.reverse()).toString()){
        return true;
    }
    else{
        return false;
    }
}

console.log(verificaPalindrome("arara"));

console.log(verificaPalindrome("Trybe"));
console.log(verificaPalindrome("desenvolvimento"));