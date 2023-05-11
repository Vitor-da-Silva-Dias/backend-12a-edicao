import { Animal, Jacare } from "./animal/animal";
import { Galinha } from "./animal/galinha";
import { Zoologico } from "./animal/zoologico";
import { Cachorro } from "./animal/cachorro";

const zoo = new Zoologico("Zoologico de POA", "Rua Teste 123");

const marilu = new Galinha(1, "Marilu", 5, 100);
const daphne = new Cachorro(2, "Daphne", 3);
const jacare = new Jacare(3, "Josecaré", 20, true);

zoo.addAnimal(marilu);
zoo.addAnimal(daphne);
zoo.addAnimal(jacare);

const animaisQueVoam = zoo.animais
    .filter((animal) => !animal.podeVoar)
    .map((animal) => {
        return {
            nome: animal.nome,
            idade: animal.idade,
        };
    })
    .reduce((initial, current) => {
        return initial + current.idade;
    }, 0);

let algum = zoo.animais.some((item) => {
    return item.idade > 10;
});

zoo.animais.forEach((item) => {
    // console.log(item);
    item.idade += 1;
});

console.log(zoo.animais);
