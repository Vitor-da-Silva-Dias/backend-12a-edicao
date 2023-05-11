import { Animal } from "./animal";
import { TipoAnimal } from "./tipo-animal";

export class Cachorro extends Animal {
    constructor(id: number, nome: string, idade: number) {
        super(id, nome, TipoAnimal.Cachorro, idade, false);
    }

    andar() {
        console.log("Andando como um cachorro...");
    }

    falar(): void {
        console.log("Au au au");
    }
}
