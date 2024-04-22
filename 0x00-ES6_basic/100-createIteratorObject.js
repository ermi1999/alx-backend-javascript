export default function createIteratorObject(report) {
  // eslint-disable-next-line no-param-reassign
  report[Symbol.iterator] = () => {
    let arr = [];
    for (const value of Object.values(report.allEmployees)) {
      arr = arr.concat(value);
    }
    let index = 0;
    return {
      next() {
        if (index < arr.length) {
          // eslint-disable-next-line no-plusplus
          return { value: arr[index++], done: false };
        }
        return { done: true };
      },
    };
  };

  return report;
}
