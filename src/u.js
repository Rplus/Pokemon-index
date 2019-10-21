export function fixedNumber(number, digi = 2) {
  return Math.round(number * Math.pow(10, digi)) / Math.pow(10, digi);
}

export function deepFind(obj, path) {
  let paths = path.split('.');
  let current = obj;

  for (let i = 0; i < paths.length; ++i) {
    if (current[paths[i]] == undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }
  return current;
}
