function absentVowel(x) {
  var aMatch = x.match(/[a]/gi);
  var eMatch = x.match(/[e]/gi);
  var iMatch = x.match(/[i]/gi);
  var oMatch = x.match(/[o]/gi);
  var uMatch = x.match(/[u]/gi);
  return aMatch === null ? 0 : eMatch === null ? 
  1 : iMatch === null ? 2 : oMatch === null ?
  3 : uMatch === null ? 4 : "DNE";
}

absentVowel("John Doe hs seven red pples under his bsket");
absentVowel("Bb Smith sent us six neatly arranged range bicycles");