function subsets(arr) {
  if (arr.length < 1) return [[]];

  const first = arr[0];
  const subs = subsets(arr.slice(1));
  const newSubs = subs.map(sub => [first].concat(sub));

  return subs.concat(newSubs);
}
