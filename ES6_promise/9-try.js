export default function guadrail(mathFunction) {
  const queue = [];
  let result;
  try {
    result = mathFunction();
    queue.push(result, 'Guardrail was processed');
  } catch (error) {
    queue.push(`${error}`, 'Guardrail was processed');
  }
  return queue;
}
