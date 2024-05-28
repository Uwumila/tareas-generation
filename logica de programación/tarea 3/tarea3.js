function calculateFactorial() {
    const input = document.getElementById('numberInput').value;
    const number = parseInt(input);

    if (isNaN(number) || number < 0) {
        alert('Por favor, ingrese un número válido no negativo.');
        return;
    }

    const factorial = calculateFactorialValue(number);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>El factorial de ${number} es: ${factorial}</p>`;
    console.log(`El factorial de ${number} es: ${factorial}`);
}

function calculateFactorialValue(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calculateFactorialValue(n - 1);
}