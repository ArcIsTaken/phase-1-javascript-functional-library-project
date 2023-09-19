//.forEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
    }
  
    return collection;
};

//.map
function myMap(collection, callback) {
    const result = [];
  
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i, collection));
    }
  
    return result;
};

//.reduce
function myReduce(Collection, callback, acc) {
    let result;
  
    if (Array.isArray(Collection)) {
      if (acc !== undefined) {
        result = acc;
      } else {
        result = Collection[0];
      }
  
      for (let i = 0; i < Collection.length; i++) {
        result = callback(result, Collection[i], i, Collection);
      }
    } else if (typeof Collection === 'object') {
      if (acc !== undefined) {
        result = acc;
      } else {
        result = Object.values(Collection)[0];
      }
  
      for (let key in Collection) {
        result = callback(result, Collection[key], key, Collection);
      }
    }
  
    return result;
};

//.find
function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        return collection[i];
      }
    }
    return undefined;
};

//.filter
function myFilter(collection, predicate) {
    const filteredArray = [];
  
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        filteredArray.push(collection[i]);
      }
    }
  
    return filteredArray;
};

//.size
function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    } else {
      return 0;
    }
};

//.first
function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
};

//.last
function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
};
