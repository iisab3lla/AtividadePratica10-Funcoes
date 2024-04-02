// Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// for ímpar ou falso se for par.

function valor (numero){
    numero = Number(prompt("Digite um número!"));

    if(numero % 2==0){
        alert("O número inserido é par!");
    }else{
        alert("O número inserido é impar!");
    }
};

valor();