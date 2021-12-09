const form = document.querySelector('#form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputAltura = event.target.querySelector('#altura');
    const inputPeso = event.target.querySelector('#peso');

    const altura = Number(inputAltura.value);
    const peso = Number(inputPeso.value);

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    const imc = getImc(altura, peso);
    const tableImc = getTableImc(imc)

    const msg = `Seu IMC é: ${imc} (${tableImc}).`;

    setResultado(msg, true);

});

function getTableImc(imc) {
    const table = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return table[5];
    if (imc >= 34.9) return table[4];
    if (imc >= 29.9) return table[3];
    if (imc >= 24.9) return table[2];
    if (imc >= 18.5) return table[1];
    if (imc < 18.5) return table[0];
}

function getImc(altura, peso) {
    const imc = peso/(altura*altura);
    return imc.toFixed(2);
}

function criarH5() {
    const h5 = document.createElement('h5');
    return h5;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const h5 = criarH5();

    if (isValid) {
        h5.classList.add('titulo-resultado');
    }
    else {
        h5.classList.add('bad');
    }
    h5.innerHTML = msg;
    resultado.appendChild(h5);
}

function refreshPage(){
    window.location.reload();
}