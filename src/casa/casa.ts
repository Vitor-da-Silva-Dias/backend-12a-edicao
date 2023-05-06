export class Casa {
    private altura: number;
    public cor: string;
    public qtdJanelas: number;
    public janelasAbertas: number;

    constructor(altura: number, cor: string, janelas: number, janelasAbertas?: number) {
        this.altura = altura;
        this.cor = cor;
        this.qtdJanelas = janelas;

        if (janelasAbertas) {
            this.janelasAbertas = janelasAbertas;
        }
    }

    public abrirJanela() {
        if (this.janelasAbertas) {
            this.janelasAbertas = this.janelasAbertas + 1;
        }
    }

    public setAltura(altura: number) {
        if (this.cor === "branco" && altura < 100) {
            this.altura = altura;
        }
    }

    public diminuirAltura(tamanho: number) {
        const novaAltura = this.altura - tamanho;
        if (novaAltura < 10) {
            console.log("Vc esta diminuindo demais, tente um valor menor");

            return;
        }

        this.altura = novaAltura;
    }

    public informarAltura() {
        console.log(`A altura da casa é ${this.altura} metros`);
    }

    public alterarCor(novaCor: string) {
        if (this.qtdJanelas < 5) {
            this.cor = novaCor;
        }
    }
}
