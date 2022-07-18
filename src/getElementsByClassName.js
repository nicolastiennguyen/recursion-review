// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  // if parent doc body contains className, add it to the list
  if (document.body.classList.contains(className)) {
    result.push(document.body);
  }
  // define helper function for recursion
  var helper = function(doc) {
    // look at childnodes of doc param
    doc.childNodes.forEach(function(item) {
      if (item.nodeType === Node.ELEMENT_NODE) {
        // if element node, check if the element's classlist contains target className
        if (item.classList.contains(className)) {
          // add element to list
          result.push(item);
        }
      }
      return helper(item);
    })
  }
  helper(document.body);
  return result;
};

/**
var getElementsByClassName = function(className) {
  var result = [];
  if (document.body.classList.contains(className)) {
    result.push(document.body);
  }
  var helper = function(doc) {
    doc.children.forEach(function(item) {
      if (item.classList.contains(className)) {
        result.push(item);
      }
      return helper(item);
    })
  }
  helper(document.body);
  return result;
};
**/

