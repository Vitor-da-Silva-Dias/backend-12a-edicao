// Nome de class - PascalCase
// UsuarioDoSistema

// Nome de atributo
// camelCase

export class Casa {
    altura: number;
    cor: string;
    qtdJanelas: number;
    janelasAbertas: number;

    abrirJanela() {
        this.janelasAbertas = this.janelasAbertas + 1;
    }

    informarAltura() {
        console.log(`A altura da casa é ${this.altura} metros`);
    }

    alterarCor(novaCor: string) {
        if (this.qtdJanelas < 5) {
            this.cor = novaCor;
        }
    }
}
