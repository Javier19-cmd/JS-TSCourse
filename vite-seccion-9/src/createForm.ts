function createForm(): void{
    const NUMER_OF_INPUTS = 5;

    const form = document.createElement('form');

    form.className = "flex flex-col items-center gap-4";

    const allInputs = Array.from({ length: NUMER_OF_INPUTS }, (_, index) => {
    const input = document.createElement('input');
    
    input.type = "number";
    input.className = "w-full rounded-md bg-neutral-900 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md";
    input.placeholder = `Number ${index + 1}`;
    form.appendChild(input);
    
    return input;
    })

    const submitButton = document.createElement('button');
    submitButton.className = "flex p-2.5 bg-blue-500 rounded-xl hover:rounded-3xl hover:bg-blue-600 transition-all duration-300 text-white"
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    const queriedElements = {
    message: getElement<HTMLParagraphElement>('#message'),
    maxElement: getElement<HTMLParagraphElement>('#max'),
    minElement: getElement<HTMLParagraphElement>('#min'),
    }

    document.body.appendChild(form);

    form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let numbers: number[] = [];
    let hasError = false;
    
    allInputs.forEach(input => {
        const value = input.valueAsNumber;
        
        if (isNaN(value) || value <= 0) {
        hasError = true;
        }
        
        numbers.push(value);
    });
    
    if (hasError) {
        queriedElements.message.textContent = "All numbers must be greater than zero.";
        queriedElements.maxElement.textContent = "";
        queriedElements.minElement.textContent = "";
        return;
    }
    
    const maxNumber = Math.max(...numbers);
    const minNumber = Math.min(...numbers);
    
    queriedElements.message.textContent = "Success! See the results below:";
    queriedElements.maxElement.textContent = `Max number: ${maxNumber}`;
    queriedElements.minElement.textContent = `Min number: ${minNumber}`;
    });
}

export { createForm };