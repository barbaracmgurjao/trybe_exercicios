const checkPoints = (rightAnswers, studentAnswers) => {
  let points = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    if (rightAnswers[i] === studentAnswers[i]) {
      points += 1;
    } else if (studentAnswers[i] === 'N.A') {
      points += 0;
    } else {
      points -= 0.5;
    }
  }
  return points;
}

const numberOfHits = (rightAnswers, studentAnswers, callback) => {
  return `Resultado final: ${callback(rightAnswers, studentAnswers)} pontos.`;
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(numberOfHits(RIGHT_ANSWERS, STUDENT_ANSWERS, checkPoints));
