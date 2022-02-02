// Run this function that a match exists between database object IDs (techStack, for example) and a given array of integers.
// The function returns 1 of 2 strings if an object ID matches an integer in the given array; the strings are the class names given to the list item elements
// The function accepts 2 arguments: id, comparisonArray

export const getMatch = (id, comparisonArray) => {
  let techItem = comparisonArray.find((item) => item === id);
  if (techItem) {
    return "tech__item usedHere";
  } else {
    return "tech__item";
  }
};

//   Choose a random array object
export const getRandomObj = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Creates a new Array with only the values from the given property "tagline"
export const getTaglinesTextArray = (array) => {
  let newArray = array.map((taglineObj) => taglineObj.tagline);
    return newArray;
}
