// Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito
// quando ele é igual a soma dos seus divisores excetuando ele
// próprio.

// Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores

let numero = parseInt(prompt('Digite um número inteiro!'));

function djonathan() {
    if (numero <= 0) {
        return false;
    }

    let soma = 0;

    for (let i = 1; i <= Math.floor(numero / 2); i++) {
        if (numero % i === 0) {
            soma += i;
        }
    }

    return soma === numero;
}

document.write(djonathan());