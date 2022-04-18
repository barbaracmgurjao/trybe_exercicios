//questao 1
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2, 
        silver: 3 
    }
}
//questao 2
console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");

//questao 3
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
//questao 4
let vezes = player.bestInTheWorld.length;
console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + vezes + " vezes.");
//questao 5
let medalhas = 'medals';
console.log("A jogadora possui " + player[medalhas]['golden'] + " medalhas de ouro e " + player[medalhas]['silver'] + " medalhas de prata.");