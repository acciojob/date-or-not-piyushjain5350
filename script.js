function isDate(input) {
  if (Object.prototype.toString.call(input) === "[object Date]") {
    // Check if it's a valid date object
    return !isNaN(input.getTime());
  } else if (typeof input === 'string') {
    // Check if it's a valid date string
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  } else {
    return false;
  }
}
 
function validateDate() {
  const inputValue = document.getElementById('inputValue').value;
  const result = isDate(inputValue);

  document.getElementById('result').innerText = `Is Valid Date: ${result}`;
}