function spinWords(string) {
  var array = string.split(' ');

  array.forEach(function(word, index) {
    if(word.length > 4) {
      array[index] = word.split('').reverse().join('');
    }
  });
  return array.join(' ');
}

new reverseWord('one two three fouuuuuur');