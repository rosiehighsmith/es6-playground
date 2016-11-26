function longestPalindrome(s) {
  //find the longest palindrome in the string and 
  //return the length of that palindrome
  //loop through the string and use substring
  //as you loop keep track of the longest substring so far
  //from 0 index to s.length+1, add to array and check if palind.

  for(var i = 0; i < s.length; i++) {
    console.log(i);
  }
  //console.log(s.substring(0,2));
  if(s == s.split('').reverse().join('')) {
    console.log(s.length);
  }
  else {
    console.log("There is no palindrome here!");
  }
}

new longestPalindrome('aabaa');
//new longestPalindrome('Johnny Depp')
