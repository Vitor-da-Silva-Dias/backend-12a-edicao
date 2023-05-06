// composição (dependencia forte)
export class Aluno {
    public avaliacoes: Avaliacao[];

    constructor(private id: number, private nome: string) {
        this.avaliacoes = [];
    }
}

export class Funcionario {}

// agregação/associação (dep fraca)
export class Avaliacao {
    private monitor: Funcionario;

    constructor(private id: number, public modulo: string, public nota: number) {}
}

// COMPOSIÇÃO (diferente de herança)
// AGREGAÇÃO
// ASSOCIAÇÃO

// aluno POSSUI avaliacao(oes)

// José
// A1 (front III, 10)
// A2 (backend, 8)

// Joana
// A1 (front III, 7)
// A2 (backend, 10)
// A3 (banco de dados, 10)
