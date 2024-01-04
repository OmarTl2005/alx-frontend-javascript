export default function guardrail(mathFunction) {
  const queue = [];
  let temp;

  try {
    temp = mathFunction();
  } catch (error) {
    temp = `Error : ${error.message}`;
  }
  queue.push(temp);
  queue.push('Guardrail was processed');
  return queue;
}
