


function countCharA(inputString) {
  let count = 0;
  for (let index = 0; index < inputString.length; index++) {
    if (inputString[index] === 'a' || inputString[index] === 'A') {
      count++;
    } 
  }
  console.log(count);
  return count;
}
console.log("Sum of num a & A available in I AM Learning JavaScript, The Language of internet is :")
countCharA("I AM Learning JavaScript, The Language of internet");
console.log("Sum of num a & A available in I AM Learning JavaScript, My favorite movie is LAggAn :")
countCharA("My favorite movie is LAggAn"); // Output: 3
