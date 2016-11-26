"use strict";

var _ = {
  // Implements:
  // https://lodash.com/docs#join
  join: (array, separator = ',') => {
    var element = "";
    for (var i = 0; i < array.length; i++) {
      if (i < array.length - 1) {
        element += array[i] + separator;
      }
      else {
        element += array[i];
      }
    }
    return element;
  }
}


const value = _.join(["hello", "goodbye", "yo"], ", ")

console.log(value);