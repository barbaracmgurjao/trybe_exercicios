const checkResult = (number, bet) => { 
  if (number === bet) {
    return 'Parabéns você ganhou.';
  } else {
    return'Tente novamente.'
  }
};

const getRandom = (max) => Math.floor(Math.random() * max + 1);

const resultDrawing = (bet, callback) => {
  return callback(getRandom(5), bet);

}

console.log(resultDrawing(2, checkResult));
