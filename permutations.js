function permutations(arr) {
  if (arr.length === 1) return [arr];
  const result = [];

  for (let i = 0, n = arr.length; i < n; i++) {
    let perms = permutations(arr.slice(0, i).concat(arr.slice(i + 1)));

    for (let j = 0, m = perms.length; j < m; j++) {
      perms[j].unshift(arr[i]);
      result.push(perms[j]);
    }
  }

  return result;
}

// alters original array
function permutate(arr) {
  if (arr.length === 1) return [arr];
  const result = [];

  const first = arr.shift();
  const perms = permutate(arr);

  perms.forEach(perm => {
    for (let i = 0, n = perms.length + 1; i < n; i++) {
      result.push(perm.slice(0, i).concat([first], perm.slice(i)));
    }
  });

  return result;
}
