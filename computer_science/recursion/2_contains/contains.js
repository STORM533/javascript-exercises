const contains = function (object, searchValue) {
  //can use word
  // const values = Object.values(object);
  // if (values.includes(word)) return true;

  // in this solution the mistake i made was that instead of checking the values inside values variable
  // i was checking the value variables time after time. (in line 7)
  //To fix this we will loop over values variable and check inside.

  // if (typeof values === "object" && values !== null) {
  //   if (contains(values, word)) return true;
  //  }
  const values = Object.values(object); //same as first line

  // NaN === NaN evaluates to false
  // Normally, we would have to do an explicit Number.isNaN() check to compare NaN equality
  // However, Array.prototype.includes automatically handles this for us
  if (values.includes(searchValue)) return true; //same as second line

  const nestedObjects = values.filter(
    //this is where we iterate over the values variables inside
    // typeof null === 'object' evaluates to true ¯\_(ツ)_/¯
    (value) => typeof value === "object" && value !== null
  );
  //the some  keyword instead of iterating one by one goes throught all the values inside
  //and sees which value passes the condition
  return nestedObjects.some((nestedObject) =>
    contains(nestedObject, searchValue)
  );
};

// Do not edit below this line
module.exports = contains;
