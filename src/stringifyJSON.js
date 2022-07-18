// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  console.log('Input: ', obj, 'type: ', typeof obj)
  // if input object is a number, convert to a string
  if (typeof obj === 'number') {
    return obj.toString();
  }
  // if input is null, return null
  if (obj === null) {
    return 'null';
  }
  // if input is a boolean, convert to a string
  if (typeof obj === 'boolean') {
    return obj.toString();
  }
  // if input is string return the same input w double quotes

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // for arrays
  if (Array.isArray(obj)) {
    // if empty
    if (obj.length === 0) {
      return '[]';
    }
    var temp = [];
    // [1,2,3]
    obj.forEach(function(item) {
      temp.push(stringifyJSON(item));
    })
    return '[' + temp + ']';
  }
  // for objects
  if (typeof obj === 'object') {
    // if empty
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    var tempObj = '{';
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      // if key or value is undefined skip
      if (keys[i] === 'undefined'
        || obj[keys[i]] === undefined
        || typeof keys[i] === 'function'
        || typeof obj[keys[i]] === 'function') {
          continue;
        }
      tempObj += stringifyJSON(keys[i]);
      tempObj += ':';
      tempObj += stringifyJSON(obj[keys[i]]);
      // if not last key, add comma
      if (i !== keys.length - 1) {
        tempObj += ',';
      }
    }
    tempObj += '}';
    return tempObj;
  }

};
