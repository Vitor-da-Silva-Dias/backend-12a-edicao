import { Animal } from "./animal";

export class Zoologico {
    private ingressosVendidos: number;
    public animais: Animal[];

    constructor(public nome: string, public endereco: string) {
        this.ingressosVendidos = 0;
        this.animais = [];
    }

    public venderIngresso(): void {
        console.log("Vendi 1 ingresso");
        this.ingressosVendidos += 1;
    }

    public lerIngressosVendidos() {
        console.log(`Foram vendidos ${this.ingressosVendidos} ingressos.`);
    }

    public imprimirAnimais() {
        console.log(this.animais);
    }

    public addAnimal(animal: Animal) {
        this.animais.push(animal);
    }

    public removerAnimal(id: number) {
        const animalIndex = this.animais.findIndex((animal) => {
            return animal.id === id;
        });

        if (animalIndex < 0) {
            console.log(`O animal ${id} não existe`);
            return;
        }

        this.animais.splice(animalIndex, 1);
    }
}
