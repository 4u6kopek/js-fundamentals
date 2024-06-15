function pyramidOfKingDjoser(baseSize, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;

  let height = 0;
  let floor = 1;
  for (let curSize = baseSize; curSize > 0; curSize -= 2) {
    height += increment;

    let totalArea = Math.pow(curSize, 2);

    if (curSize <= 2) {
      gold = totalArea * increment;
    } else {
      let stoneArea = ((curSize - 2) ** 2);
      stone += stoneArea * increment;

      if (floor % 5 === 0) {
        lapis += (totalArea - stoneArea) * increment;
      } else {
        let marbleArea = totalArea - stoneArea;
        marble += marbleArea * increment;
      }
    }
    floor++;
  }
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(height)}`);
}
pyramidOfKingDjoser(11, 1);
console.log('----');
pyramidOfKingDjoser(11, 0.75);
console.log('----');
pyramidOfKingDjoser(12, 1);
console.log('----');
pyramidOfKingDjoser(23, 0.5);
