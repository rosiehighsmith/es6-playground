function toWeirdCase(string){
  string = string.toLowerCase();
  var array = string.split(" ");
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    var word = array[i];  
    for(var j = 0; j < word.length; j++) { 
      if(j % 2 === 0) {
        var letter = word.charAt(j).toUpperCase();
      }
      else {
        letter = word.charAt(j);
      }
      newArray.push(letter);    
    }

    if(i < array.length - 1){
      newArray.push(" ");
    }
  }
    var updatedArray = newArray.join("").toString();
    return updatedArray;
}

new toWeirdCase('TESTING testing one TWO three');
new toWeirdCase('one fish two fish red fish blue fish');
new toWeirdCase('what');

