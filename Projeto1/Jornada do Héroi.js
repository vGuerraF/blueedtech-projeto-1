const prompt = require(`prompt-sync`)();
console.clear();

console.log()
console.log(`Você é um fisioculturista e esta se preparando para o Mr.Olympia. Faltando somente 5 dias para a competição, você tem que decidir qual será o melhor exercício para cada dia.\n`);

const pergunta1 = prompt(`É o primeiro dia de treino, você quer treinar peito? (sim/nao)  `).toLowerCase();
const pergunta2 = prompt(`É o segundo dia de treino, você quer treinar perna? (sim/nao)  `).toLowerCase();
const pergunta3 = prompt(`É o terceiro dia de treino, você quer treinar costas? (sim/nao)  `).toLowerCase();
const pergunta4 = prompt(`É o quarto dia de treino, você quer treinar tríceps? (sim/nao)  `).toLowerCase();
const pergunta5 = prompt(`É o quinto dia de treino, você quer treinar bíceps? (sim/nao)  `).toLowerCase();

let ganhos = 0;
let perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5];
let musculos = ['peito', 'perna', 'costas', 'tríceps', 'bíceps']
let naoTreinado = [];

for(i = 0; i < perguntas.length; i++){
    while(perguntas[i] != 'sim' && perguntas[i] != 'nao'){
        perguntas[i] = prompt(`Resposta inválida na pergunta ${i+1}. Digite somente sim ou nao: `)
    }
    if(perguntas[i] == 'sim'){
        ganhos++
    } else{
        naoTreinado.push(musculos[i]);
    }
}
if(ganhos == 0){
    console.log(`\nVocê desistiu de seguir o caminho árduo dos campeões pois, não quis treinar ${naoTreinado},e nem se deu ao trabalho de entrar no Mr.Olympia.\n `)
}
else if(ganhos == 1 || ganhos == 2){
    console.log(`\nVocê terminou o Mr.Olympia na última posição e se arrepende dos dias que não quis treinar ${naoTreinado} por pura preguiça.\n`)
}
else if(ganhos == 3){
    console.log(`\nVocê terimou o Mr.Olympia na terceira posição pois, não quis treinar ${naoTreinado} e percebe que a lacuna entre você e o campeão é alta. Caso queira ganhar na próxima vez terá que treinar todos os dias.\n `)
}
else if(ganhos == 4){
    console.log(`\nVocê terminou o Mr.Olympia na segunda posição, perdendo por pouco pro campeão. Você olha pro passado e se lembra do dia que não quis treinar ${naoTreinado}, se arrependendo profundamente, sua vontade de chegar ao topo só aumenta...\n`);
}
else{
    console.log(`\nPARABÉNS!! Você trilhou o caminho dos deuses e terminou o Mr.Olympia em primeiro lugar.\n`)
}
