
const input = document.getElementById('num');
const result = document.getElementById('mahi1');

input.addEventListener('click', () => 
    {
        const number = parseInt(input.value);
        if (number == null) 
            {
            result.textContent = "Please enter a valid number.";
            return;
            }

    const factorial = calculateFactorial(number);
    result.textContent = `The factorial of ${number} is ${factorial}`;
    });

function calculateFactorial(n) 
{
    if (n === 0 || n === 1) 
    {
        return 1;
    }
    else
    {
        return n * calculateFactorial(n - 1);
    }
}
