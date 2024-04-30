export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  let result = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  }
  result = result.slice(0, result.length - 1);

  return result;
}
