import { TipoAnimal } from "./tipo-animal";

export abstract class Animal {
    constructor(
        protected _id: number,
        public nome: string,
        public tipo: TipoAnimal,
        public idade: number,
        public podeVoar?: boolean
    ) {}

    public get id() {
        return this._id;
    }

    informarTipo() {
        switch (this.tipo) {
            case TipoAnimal.Gato:
                console.log("O animal é cachorro");
                break;
            case "G":
                console.log("O animal é uma galinha");
                break;
            default:
                console.log("O animal eu nao sei");
                break;
        }

        return;
    }

    andar() {
        console.log("Atenção! animal andando...");
        this.idade = 20;
    }

    abstract falar(): void;
}

export abstract class Reptil extends Animal {
    constructor(
        id: number,
        nome: string,
        idade: number,
        private aquatico: boolean
    ) {
        super(id, nome, TipoAnimal.Reptil, idade, false);
    }
}

export class Jacare extends Reptil {
    falar(): void {
        console.log("*som de jacare*");
    }
}
