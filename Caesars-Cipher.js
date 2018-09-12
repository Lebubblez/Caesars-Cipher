function rot13(str) {
  //Empty array to store unneeded values
  var newString = [];
//for-loop to loop through the characters in str based on conditions
//Converting to  ASCII character code A(65)-Z(90)
  for (var i = 0; i < str.length; i++) {
    //Store values lower than 65 and greater than 90 since they are unneeded
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      newString.push(str.charAt(i));
      //if within the range, half of the values larger than 77 must subtract 13
    } else if (str.charCodeAt(i) > 77) {
      newString.push(String.fromCharCode(str.charCodeAt(i) - 13));
      //if greater than 77, add 13 to charcode to match letter
    } else {
      newString.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }
  }
  //Join the strings characters
  return newString.join("");
}
console.log(rot13("SERR PBQR PNZC"));
