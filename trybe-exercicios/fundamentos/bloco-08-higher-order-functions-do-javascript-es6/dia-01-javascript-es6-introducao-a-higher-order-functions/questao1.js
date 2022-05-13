const generateEmployee = (name) => {
  const pieceEmail = name.split(' ').join('_').toLowerCase();
return{
    nomeCompleto: name,
    email: `${pieceEmail}@trybe.com`,
  };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(generateEmployee));