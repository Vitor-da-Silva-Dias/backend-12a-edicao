// galinha É um animal

import { Animal } from "./animal";
import { TipoAnimal } from "./tipo-animal";

export class Galinha extends Animal {
    constructor(id: number, nome: string, idade: number, public numeroPenas: number) {
        super(id, nome, TipoAnimal.Galinha, idade, true);
    }

    mostrarId() {
        console.log("ID: " + this.id);
    }

    falar(): void {
        console.log("pó pó");
    }

    andar() {
        if (this.idade < 10) {
            console.log("andar...");
        } else {
            console.log("A galinha esta muito velha e nao esta andando");
        }
    }
}
