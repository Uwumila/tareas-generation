function generarNumeroSecreto() {
    return Math.floor(5);
}

const numeroSecreto = generarNumeroSecreto();
const intentos = [];

function jugar() {
    const inputNumero = document.getElementById("inputNumero");
    const resultados = document.getElementById("resultados");
    const intento = inputNumero.value;

    if (isNaN(intento) || intento < 1 || intento > 100) {
        alert("Por favor ingresa un número válido entre 1 y 100.");
        inputNumero.value = "";
        return;
    }

    intentos.push(parseInt(intento));

    if (parseInt(intento) === numeroSecreto) {
        resultados.innerHTML = `<p>Felicidades, adivinaste el número secreto!</p>
                                <p>Lista de números introducidos: ${intentos.join(", ")}</p>`;
    } else {
        resultados.innerHTML = "<p>Ups, el número secreto es incorrecto, vuelve a intentarlo.</p>";
    }

    inputNumero.value = "";
    inputNumero.focus();
}
