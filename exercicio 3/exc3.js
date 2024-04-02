// Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.

function valor(numero){
    numero = Number(prompt("Insira um número positivo e inteiro!"));

    if(numero >= 1 && numero % 2 != 0){
        alert(`O número: ${numero} é primo!`);
    }else{
        alert(`O número: ${numero} não é primo!`);
    }
};

valor()