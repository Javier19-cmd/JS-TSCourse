const form = document.getElementById('numberForm');
const inputs = form.querySelectorAll('input[type="number"]');
const message = document.getElementById('message');
const maxElement = document.getElementById('max');
const minElement = document.getElementById('min');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  let numbers = [];
  let hasError = false;
  
  inputs.forEach(input => {
    const value = input.valueAsNumber;
    
    if (isNaN(value) || value <= 0) {
      hasError = true;
    }
    
    numbers.push(value);
  });
  
  if (hasError) {
    message.textContent = "All numbers must be greater than zero.";
    maxElement.textContent = "";
    minElement.textContent = "";
    return;
  }
  
  const maxNumber = Math.max(...numbers);
  const minNumber = Math.min(...numbers);
  
  message.textContent = "Success! See the results below:";
  maxElement.textContent = `Max number: ${maxNumber}`;
  minElement.textContent = `Min number: ${minNumber}`;
});