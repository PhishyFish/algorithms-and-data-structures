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
