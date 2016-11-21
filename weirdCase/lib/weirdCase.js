function toWeirdCase(string){
  string = string.toLowerCase();
  var array = string.split(" ");
  var newArray = [];
  for(var arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    var word = array[arrayIndex];  
    for(var wordIndex = 0; wordIndex < word.length; wordIndex++) { 
      if(wordIndex % 2 === 0) {
        var letter = word.charAt(wordIndex).toUpperCase();
      }
      else {
        letter = word.charAt(wordIndex);
      }
      newArray.push(letter);    
    }
    if(arrayIndex < array.length - 1){
      newArray.push(" ");
    }
  }
    return newArray.join("").toString();
}

new toWeirdCase('TESTING testing one TWO three');
new toWeirdCase('one fish two fish red fish blue fish');
new toWeirdCase('what');

