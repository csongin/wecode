
const findEvenNumber = () => {
  const evenNum = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      evenNum.push(i);
    }
  } return evenNum;
}

console.log(findEvenNumber());