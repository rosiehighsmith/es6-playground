function reverseWord(string) {
  var array = string.split(' ');
  var newArray = [];

  for(var i = 0; i < array.length; i++) {
    var word = array[i];
    if(word.length > 4) {
      var wordArray = word.split('');
      word = wordArray.reverse().join('');
    }
    else {
      word = word;
    }
    newArray.push(word);
  }
  return newArray.join(" ");
}

new reverseWord('one two three fouuuuuur');