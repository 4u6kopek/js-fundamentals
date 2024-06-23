function amazingNum(number) {
  const stringNum = `${number}`;
  let sum = 0;
  for (let i = 0; i < stringNum.length; i++) {
    sum += Number(stringNum[i]);
  }
  let isAmazing = false;
  if (sum.toString().includes(`9`)) {
    isAmazing = 'True';
  } else {
    isAmazing = 'False';
  }

  console.log(`${number} Amazing? ${isAmazing}`);
}
amazingNum(1233); //1233 Amazing? True
amazingNum(999); //999 Amazing? False
