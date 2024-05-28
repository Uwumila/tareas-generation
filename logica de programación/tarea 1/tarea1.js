function solicitarNumero(mensaje) {
    let num;
    do {
        num = prompt(mensaje);
        num = Number(num);
    } while (isNaN(num));
    return num;
}

//solicitar números
let num1 = solicitarNumero("Ingrese el primer número:");
let num2 = solicitarNumero("Ingrese el segundo número:");
let num3 = solicitarNumero("Ingrese el tercer número:");

// Función para ordenar y mostrar los números
function ordenarNumeros(n1, n2, n3) {
    const numeros = [n1, n2, n3];
    numeros.sort((a, b) => a - b); 

    const menorAMayor = numeros.join(', ');
    const mayorAMenor = numeros.reverse().join(', ');

    const outputDiv = document.getElementById('output');
    if (n1 === n2 && n2 === n3) {
        outputDiv.innerHTML = `
            <p>Los números son iguales: ${n1}, ${n2}, ${n3}</p>
        `;
    } else {
        outputDiv.innerHTML = `
            <p>Ordenados de menor a mayor: ${menorAMayor}</p>
            <p>Ordenados de mayor a menor: ${mayorAMenor}</p>
        `;
    }
}

ordenarNumeros(num1, num2, num3);
