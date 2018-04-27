function binarySearch(arr, num) {
  let start = 0;
  let stop = arr.length - 1;

  while (start <= stop) {
    let mid = Math.floor((start + stop) / 2);

    if (arr[mid] < num) {
      start = mid + 1;
    } else if (arr[mid] > num) {
      stop = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

function binarySearchRecursive(arr, num) {
  if (arr.length < 1) return -1;

  let start = 0;
  let stop = arr.length - 1;
  let mid = Math.floor((start + stop) / 2);

  if (arr[mid] < num) {
    let result = binarySearchRecursive(arr.slice(mid + 1, stop + 1), num);
    return result !== -1 ? mid + 1 + result : result;
  }
  if (arr[mid] > num) {
    return binarySearchRecursive(arr.slice(start, mid), num);
  }
  
  return mid;
}
