export default function guardrail(mathFunction) {
  const result = [];

  try {
    result.push(mathFunction());
  } catch (e) {
    result.push(e.message);
  }
  result.push('Guardrail was processed');

  return result;
}
