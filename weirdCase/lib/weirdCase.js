function toWeirdCase(string) {
  //even indices of each word in the string should be UPPERCASE
  //odd indices are lowercase
  //ex) hello i am rosie = HeLlo I Am RoSiE
  //after using indexOf to find spaces, the next index
  //should be capitalized ...assign next index = 0? keep looping?

  string = string.split('');
  function removeAtIndex() {

  }

  var space = string.indexOf(' ');
  console.log(space);

  for(var i = 0; i < string.length; i++) {
    if(i % 2 === 0) {
      string[i] = string[i].toUpperCase();
    }
    else {
      string[i] = string[i].toLowerCase();
    }
  }
  string = string.join('');
  // return(string);
  console.log(string);
}

toWeirdCase('This is a test');
