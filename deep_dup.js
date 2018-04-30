function deepDupObject(obj) {
  const copy = {};

  for (const prop in obj) {
    if (Array.isArray(obj[prop])) {
      copy[prop] = deepDupArray(obj[prop]);
    } else if (typeof obj[prop] === 'object') {
      copy[prop] = deepDupObject(obj[prop]);
    } else {
      copy[prop] = obj[prop];
    }
  }

  return copy;
}

function deepDupArray(arr) {
  const copy = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      copy.push(deepDupArray(item));
    } else if (typeof item === 'object') {
      copy.push(deepDupObject(item));
    } else {
      copy.push(item);
    }
  }

  return copy;
}
