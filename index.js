/* Desafio Curso DIO: Classificador de nível de Herói.

O Que pode ser utilizado
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções (obrigatório)

Uma ou mais funções devem ser utilizadas no programa.

Deve-se utilizar uma estrutura de decisão para apresentar uma das mensagens abaixo:
Se SaldoVitórias for menor ou igual a 10 = Ferro
Se SaldoVitórias for entre 11 e 20 = Bronze
Se SaldoVitórias for entre 21 e 50 = Prata
Se SaldoVitórias for entre 51 e 80 = Ouro
Se SaldoVitórias for entre 81 e 90 = Diamante
Se SaldoVitórias for entre 91 e 100= Lendário
Se SaldoVitórias for maior ou igual a 101 = Imortal

Gere como SAÍDA a seguinte mensagem:
"O Herói tem saldo de {saldoVitorias} vitórias, e está no nível {nivel}"
*/



// Criando as variáveis para armazenar os dados do Herói
let totalVitorias = 50;
let totalDerrotas = 0;
let saldoVitorias = 0;
let nivelHeroi = "";


// Definindo os vários níveis do jogo:
const NIVEL_FERRO = 10;
const NIVEL_BRONZE = 20;
const NIVEL_PRATA = 50;
const NIVEL_OURO = 80;
const NIVEL_DIAMANTE = 90;
const NIVEL_LENDARIO = 100;
const NIVEL_IMORTAL = NIVEL_LENDARIO + 1;




////////////////////////////////////////////////////////////////
///////  CALCULAR O SALDO DE VITÓRIAS DE UM HERÓI /////////////
//////////////////////////////////////////////////////////////
function calcularSaldoVitorias(totalVit, totalDerr) {
    const saldoVit = totalVit - totalDerr;
    return saldoVit;
}


////////////////////////////////////////////////////////////////
////////////////  DETERMINAR O NÍVEL DO HERÓI /////////////////
//////////////////////////////////////////////////////////////
function determinarNivel(saldoVit) {

    let nivelDeterminado = "";

    switch (true) {
        case saldoVit <= NIVEL_FERRO:
            nivelDeterminado = 'Ferro';
            break;
        case saldoVit <= NIVEL_BRONZE:
            nivelDeterminado = 'Bronze';
            break;
        case saldoVit <= NIVEL_PRATA:
            nivelDeterminado = 'Prata';
            break;
        case saldoVit <= NIVEL_OURO:
            nivelDeterminado = 'Ouro';
            break;
        case saldoVit <= NIVEL_DIAMANTE:
            nivelDeterminado = 'Diamante';
            break;
        case saldoVit <= NIVEL_LENDARIO:
            nivelDeterminado = 'Lendário';
            break;
        case saldoVit >= NIVEL_IMORTAL:
            nivelDeterminado = 'Imortal';
            break;
        default:
            nivelDeterminado = 'Desconhecido';
    }

    return nivelDeterminado;
}



/////////////////////////////////////////////////////////
//////////////////  FUNÇÃO PRINCIPAL  //////////////////
///////////////////////////////////////////////////////
function main() {

    // Calcular o saldo de vítórias e o nível do Herói
    saldoVitorias = calcularSaldoVitorias(totalVitorias, totalDerrotas);
    nivelHeroi = determinarNivel(saldoVitorias);

    // Saída
    console.log('\n---------------------------------------------------------\n'); 
    console.log(`O Herói tem saldo de ${saldoVitorias} vitórias, e está no nível ${nivelHeroi}.`);
    console.log('\n---------------------------------------------------------\n');
}

// Executar a função principal do programa
main();