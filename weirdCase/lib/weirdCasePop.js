function toWeirdCase(string) {
  string = string.toLowerCase();
  string = string.split(' ');
  console.log(string);

  this.removeAtIndex = function() {
    //x is the array length itself (number of words)
    for(var x = 0; x < string.length; x++) {
      var word = string.pop();
      console.log(word);
      //i is the length of each index in the array (length of word)
    //   for(var i = 0; i < string[x].length; i++) {
    //     if(i % 2 === 0) {
    //       string[i] = string[i].toUpperCase();
    //     }
    //   }
    // }
    // string = string.join(' ');
    // console.log(string);

    // for(var x = 0; x < string.length; x++) {
    //   string[0] = string[0].toUpperCase();
    //   var space = string.indexOf(' ', x);
    //   if(space !== -1) {
    //     var nextWord = space + 1;
    //     string[nextWord] = string[nextWord].toUpperCase();
    //     // for(var i = 0; i < string.length; i++) {
    //     //   if(i % 2 === 0) {
    //     //     string[i] = string[i].toUpperCase();
    //     //   }
    //     // }
    //   }
    // }
    // string = string.join('');
    // console.log(string);
  }
}

new toWeirdCase('TESTING testing one TWO three').removeAtIndex();
// new toWeirdCase('WAMALAMA DING DONG').removeAtIndex();
// new toWeirdCase('my name is rosie').removeAtIndex();
// new toWeirdCase('big bog big bog big ba ba bab llama').removeAtIndex();
