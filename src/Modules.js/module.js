export function isAnyInputEmpty(form) {
  for (const input in form) {
    if (form[input] === null) {
      return true; // Found an empty input field
    }
  }
  return false; // No empty input field found
}
