// import { Animal, Cachorro } from "./animal/animal";

import { Aluno, Avaliacao } from "./aluno/aluno";

import { Galinha } from "./animal/galinha";
// import { TipoAnimal } from "./animal/tipo-animal";

// const cachorro = new Cachorro(1, "Daphne", TipoAnimal.Cachorro, 3, false);
// const gato = new Animal(1, "chamin", TipoAnimal.Gato, 3, false);

const galinha = new Galinha(2, "MaryLu", 12, 100);

// // function lerNomeAnimal(animal: Animal) {
// //     console.log("O nome do animal é: " + animal.nome);
// // }

// // lerNomeAnimal(cachorro);
// // lerNomeAnimal(galinha);

// // galinha.irParaCeleiro();

// galinha.andar();
// cachorro.andar();

const jose = new Aluno(1, "Jose");
const av1 = new Avaliacao(2, "front III", 10);
const av2 = new Avaliacao(3, "backend", 8);

// jose.avaliacoes.push(av1);
// jose.avaliacoes.push(av2);

console.log(jose);
console.log(av1);
