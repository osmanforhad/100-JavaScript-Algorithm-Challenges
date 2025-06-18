//Give a rectangular matrix of characters, add a border of asterisks(*) to it
//there have to be concat() unshift() push()
function addBorder(pictures) {
  let wall = "*".repeat(pictures[0].length + 2);
  pictures.unshift(wall);
  pictures.push(wall);
  for (let i = 1; i < pictures.length - 1; i++) {
    pictures[i] = "*".concat(pictures[i], "*");
  }
  return pictures;
}
const result = addBorder(["abc", "ded"]);
console.log(result);
