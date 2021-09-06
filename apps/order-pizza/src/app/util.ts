export function calculatePercentageComplete(form: any) {
  const elements: HTMLFormElement[] = Array.from(form.elements);
  let percentage = 0;
  if (elements[0].value) {
    percentage += 25;
  }
  if (elements[1].value) {
    percentage += 25;
  }
  if (elements.slice(2, 5).some((e) => e.checked)) {
    percentage += 25;
  }
  if (elements.slice(5).some((e) => e.checked)) {
    percentage += 25;
  }
  return percentage;
}
