// Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.

// Ex:
// Entrada: 3672
// Saída: 1:1:12

function tempo (horas, minutos, segundos){
    let duracao = parseInt(prompt("Insira o tempo de duração de uma fábrica em segundos!"));
    
    horas = duracao / 3600;
    minutos = (duracao % 3600) / 60;
    segundos = (duracao % 3600) % 60;

    document.write(`O hórario em horas, minutos e segundos é igual à: <br> ${horas.toFixed(0)} horas, ${minutos.toFixed(0)} minutos, e ${segundos.toFixed(0)} segundos!`)
};

tempo();