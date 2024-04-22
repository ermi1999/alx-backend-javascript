export default function iterateThroughObject(reportWithIterator) {
  let text = "";
  let i = 0;
  for (const item of reportWithIterator) {
    text += i ? " | " : "";
    text += `${item}`;
    i += 1;
  }
  return text;
}
