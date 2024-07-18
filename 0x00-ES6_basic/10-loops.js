export default function appendToEachArrayValue(array, appendString) {
    let new_array = []
    for (const idx of array) {
      let value = idx;
      new_array.push(appendString + value);
    }
  
    return new_array;
  }
  console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));