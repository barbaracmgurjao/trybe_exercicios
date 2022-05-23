const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return (names.reduce((accNames, currName) => 
    accNames + currName.toLowerCase().split('').reduce((accLetterA, currLetter) => 
      currLetter === 'a' ? accLetterA + 1 : accLetterA, 0),0));
}
