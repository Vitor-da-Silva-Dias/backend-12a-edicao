// // Paradigma IMPERATIVO
// console.log("Olá mundo!!!!!");

// var nota1: number = 10;
// var nota2: number = 7;

// var media = (nota1 + nota2) / 2;

// console.log(media);

// // Paradigma PROCEDURAL
// function calcularMedia(nota1: number, nota2: number) {
//     return (nota1 + nota2) / 2;
// }

// media = calcularMedia(5, 9);
// console.log(media);

// media = calcularMedia(7, 2);
// console.log(media);

// // Paradigma FUNCIONAL
// // [1, 2, 3, 4]
// //     .map((item) => {
// //         console.log(item);
// //         return item;
// //     })
// //     .map((item) => item)
// //     .filter();

// // Paradigma Orientado a Objetos

import { Casa } from "./casa";

let casa1 = new Casa();
casa1.cor = "branco";
casa1.qtdJanelas = 10;
casa1.janelasAbertas = 0;
casa1.altura = 50;

let casaDePraia = new Casa();
casaDePraia.cor = "amarelo";
casaDePraia.janelasAbertas = 2;
casaDePraia.qtdJanelas = 10;
casaDePraia.altura = 20;

// console.log("Qtd de janelas abertas: " + casa1.janelasAbertas);

// casa1.abrirJanela();

// console.log("Qtd de janelas abertas depois do método: " + casa1.janelasAbertas);

// casa1.informarAltura();
// casaDePraia.informarAltura();

casaDePraia.alterarCor("cinza");
casa1.alterarCor("cinza");
console.log(casaDePraia);
