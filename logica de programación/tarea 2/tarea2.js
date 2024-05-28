function convertTemperature() {
    const input = document.getElementById('celsius').value;
    const celsius = parseFloat(input);

    if (isNaN(celsius)) {
        alert('Por favor, ingrese un número válido.');
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>
        <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
    `;
    console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);
    console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
}
