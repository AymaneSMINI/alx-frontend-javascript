export default function appendToEachArrayValue(array, appendString) {
    let new_array = []
    for (var idx of array) {
      let value = idx;
      new_array.push(appendString + value);
    }
  
    return new_array;
  }