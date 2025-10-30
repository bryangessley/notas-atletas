// 1 - criar função receber matriz de objetos 
// 2 - nome atleta (5) / sobrenome atleta (5)
// 3 - nota atleta (5)
// 4 - calcular média das notas excluindo maior e menor nota do atleta
// 5 - console.log(`${this.nomeAtleta} ${this.sobrenomeAtleta}, ${this.notaAtleta}, ${this.mediaAtleta}`)
// laço for percorre todos os itens da matriz de objetos

//for(let i = 0; i < objAtletas.length; i++){
// codigo que vai aqui será executado uma vez para cada item da matriz
//}

// metodo .sort() ordena as matrizes;
// ex.: notas = notas.sort();

// metodo .slice(x,y) ajuda na seleção dos valores
// let notasComputadas = notas.slice(1,4) // aqui vemos eliminação do menor e maior 

// metodo .forEach() para saber o tamanho da matriz na hora do calculo da media;

// utilizar o .length para saber o tamanho da sua matriz na hora do calculo da media

// console.log() para mostrar para o usuário

function calcularMediaAtletas(objAtletas) {
    for (let i = 0; i < objAtletas.length; i++) {
        let atleta = objAtletas[i];
        let notas = atleta.notas;
        
        notas.sort((a, b) => a - b);

        let notasComputadas = notas.slice(1, 4);
        let somaNotas = 0;

        notasComputadas.forEach(nota => {
            somaNotas += nota;
        });

        let media = somaNotas / notasComputadas.length;

        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas.join(',')}`);
        console.log(`Media Valida: ${media}`);
        console.log("")

    }
}

let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas:[8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

calcularMediaAtletas(atletas)