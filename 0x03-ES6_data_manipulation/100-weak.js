export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.get(endpoint) > 4) {
    throw new Error('Endpoint load is high');
  }
  if (!weakMap.get(endpoint)) {
    weakMap.set(endpoint, 1);
    return;
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
}
