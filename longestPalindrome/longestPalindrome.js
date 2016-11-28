//check if s is a palindrome, return true if it is, else false
function isPalindrome(s) {
  var rev_s = s.split("").reverse().join("");
  return s == rev_s;
}

//return the length of the longest palindrome
function longestPalindrome(s){
  //default to 0 and empty longest_p
  var longest_p_length = 0,
  longest_p = '';
  //loop thru string creating substrings i to end of string
  for(var i=0; i < s.length; i++) {
  var substring = s.substr(i, s.length);
  //loop through substring creating sub_substring
  //from beginning to j(substring length --> 0) 
  for(var j=substring.length; j>=0; j--) {
    var sub_subs = substring.substr(0, j);
    if (sub_subs.length < 1) {
      //skip iteration if subs_string length = 0
      continue; } 
      //assign longest_p_length to sub_subs if longest so far
      if (isPalindrome(sub_subs)) {
        if (sub_subs.length > longest_p_length) {
          longest_p_length = sub_subs.length;
          longest_p = sub_subs;
        }
      }
    }
  }
  return longest_p_length;
}

console.log(longestPalindrome("abcxyzyxabcdaaa"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome(""));