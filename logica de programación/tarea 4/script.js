function generarFibonacci() {
    const input = document.getElementById('numeroInput').value;
    const numero = parseInt(input, 10);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(numero) || numero <= 0) {
        resultadoDiv.innerHTML = 'Por favor, ingresa un número válido';
        return;
    }

    let fiboSerie = [0, 1];
    for (let i = 2; i < numero; i++) {
        fiboSerie.push(fiboSerie[i - 1] + fiboSerie[i - 2]);
    }

    resultadoDiv.innerHTML = `El resultado ${numero} es: ${fiboSerie.slice(0, numero).join(', ')}.`;
    console.log(`El resultado ${numero} es: ${fiboSerie.slice(0, numero).join(', ')}.`);
}