export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    if (typeof result === 'number') {
      queue.push(result, 'Guardrail was processed');
    } else {
      queue.push('Guardrail was processed');
    }
  } catch (e) {
    queue.push(`${e}`, 'Guardrail was processed');
  }
  return queue;
}
