let myEach = function(collection, callback) {
  const array = (Array.isArray(collection)) ? [...collection] : Object.values(collection);
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
  return collection;
}

let myMap = function(collection, callback) {
  const array = (Array.isArray(collection)) ? [...collection] : Object.values(collection);
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

let myReduce = function(collection, callback, acc = null) {
  const array = (Array.isArray(collection)) ? [...collection] : Object.values(collection);
  if (acc === null) {
    acc = array.shift();
  }
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }
  return acc;
}

let myFind = function(collection, predicate) {
  const array = (Array.isArray(collection)) ? [...collection] : Object.values(collection);
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return array[i];
    };
  }
  return;
}

let myFilter = function(collection, predicate) {
  const array = (Array.isArray(collection)) ? [...collection] : Object.values(collection);
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      newArray.push(array[i]);
    };
  }
  return newArray;
}

let mySize = function(collection) {
  const array = (Array.isArray(collection)) ? [...collection] : Object.keys(collection);
  return array.length;
}

let myFirst = function(collection, n = 1) {
  const array = (Array.isArray(collection)) ? [...collection] : Object.entries(collection);
  const newArray = array.slice(0, n);
  return (n === 1) ? newArray[0] : newArray;
}

let myLast = function(collection, n = 1) {
  const array = (Array.isArray(collection)) ? [...collection] : Object.entries(collection);
  const newArray = array.slice(-Math.abs(n));
  return (n === 1) ? newArray[0] : newArray;
}

let myKeys = function(object) {
  const array = [];
  for (const key in object) {
    array.push(key);
  }
  return array
}

let myValues = function(object) {
  const array = [];
  for (const key in object) {
    const value = object[key];
    array.push(value);
  }
  return array
}