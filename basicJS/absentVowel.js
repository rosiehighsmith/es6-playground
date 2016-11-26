function absentVowel(x){
  var aCount = 0;
  var eCount = 0;
  var iCount = 0;
  var oCount = 0;
  var uCount = 0;

  var str = x.toString();
  for(var i = 0; i < str.length; i++) {
    if (str.charAt(i)=="a") {
      aCount += 1;
    }
    else if (str.charAt(i)=="e") {
      eCount += 1;
    }
    else if (str.charAt(i)=="i") {
      iCount += 1;
    }
    else if (str.charAt(i)=="o") {
      oCount += 1;
    }
    else if (str.charAt(i)=="u") {
      uCount += 1;
    }
  }
  if (aCount === 0) {
    return 0;
  }
  else if (eCount === 0) {
    return 1;
  }
  else if (iCount === 0) {
    return 2;
  }
  else if (oCount === 0) {
    return 3;
  }
  else {
    return 4;
  }
}

absentVowel("Bb Smith sent us six neatly arranged range bicycles");