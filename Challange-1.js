//For inputArray = [1, 2, 1], elementToReplace = 1 and substractionElement = 3,
//the output should be arrayReplace(inputArray, elementToReplace, substractonElement) = [3, 2, 3].

/**
 * Create a paramitarized funcation
 * as per requirement
 */
function arrayReplace(inputArray, elementToReplace, substractonElement) {
  //extraxct array element as per index by forEach loop
  inputArray.forEach((element, index) => {
    //check inputArray element is match with elementToReplace
    if (element === elementToReplace) {
      /**
       * if match inputArray element with elementToReplace
       * then replace with substraction element
       */
      inputArray[index] = substractonElement;
    }
  });
  console.log(inputArray);
}
//calling the function and passing the peramiter value
arrayReplace([1, 2, 1], 1, 3);
