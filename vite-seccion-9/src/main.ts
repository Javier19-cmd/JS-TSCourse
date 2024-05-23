import { createForm } from "./createForm";

function getElement<T extends HTMLElement>(selector: string): T {
  const element = document.querySelector<T>(selector);

  if (element === null) {
    throw new Error(`Element with selector ${selector} not found.`);
  }

  return element;
}

// const inputs = Array.from(document.querySelectorAll<HTMLInputElement>('input[type="number"]'));
// const message = document.getElementById('message') as HTMLParagraphElement;
// const maxElement = document.getElementById('max') as HTMLParagraphElement;
// const minElement = document.getElementById('min') as HTMLParagraphElement;
// const form = document.getElementById('numberForm') as HTMLFormElement;

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
  
//   let numbers: number[] = [];
//   let hasError = false;
  
//   inputs.forEach(input => {
//     const value = input.valueAsNumber;
    
//     if (isNaN(value) || value <= 0) {
//       hasError = true;
//     }
    
//     numbers.push(value);
//   });
  
//   if (hasError) {
//     message.textContent = "All numbers must be greater than zero.";
//     maxElement.textContent = "";
//     minElement.textContent = "";
//     return;
//   }
  
//   const maxNumber = Math.max(...numbers);
//   const minNumber = Math.min(...numbers);
  
//   message.textContent = "Success! See the results below:";
//   maxElement.textContent = `Max number: ${maxNumber}`;
//   minElement.textContent = `Min number: ${minNumber}`;
// });

createForm