// Crie uma função que recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritmética,
// se for P, a média ponderada (peso: 5, 3 e 2).

let nota1 = parseFloat(prompt("Insira sua primeira nota!"));
let nota2 = parseFloat(prompt("Insira sua segunda nota!"));
let nota3 = parseFloat(prompt("Insira sua terceira nota!"));
let medias = String(prompt("Digite a letra A para média aritmética, e P para média ponderada!")).toUpperCase();

function calculoMedia (){
    
    if('A' == medias){
        document.write(`Suas notas foram: ${nota1}, ${nota2} e ${nota3}. E a sua media aritmética foi: ${((nota1 + nota2 + nota3) / 3)}`);
    } else{
        document.write(`Suas notas foram: ${nota1}, ${nota2} e ${nota3}. E a sua media ponderada é: ${(((nota1 * 5) + (nota2 * 3) + (nota3 * 2)) / 10)}`);
    }
};

calculoMedia()