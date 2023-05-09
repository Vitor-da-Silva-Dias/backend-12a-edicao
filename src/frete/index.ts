interface FreteServicoPeso {
    peso: number;
}

interface FreteServico {
    calcularFrete: (peso?: number) => number;
}

type LoginParams =
    | FreteServico
    | FreteServicoPeso
    | {
          preco?: number;
      }
    | {
          teste?: string;
      };

const login: LoginParams = {
    peso: 20,
    teste: "abc",
};

// Correios É um FreteServico
class Correios implements FreteServico {
    peso: number;

    public calcularFrete(peso?: number) {
        return (peso ?? 1) * 10;
    }
}

class Fedex implements FreteServico {
    public calcularFrete(peso?: number) {
        return 20;
    }
}

class Americanas implements FreteServico {
    public calcularFrete(peso?: number) {
        return 50;
    }
}

class MercadoLivre implements FreteServico {
    public calcularFrete(peso?: number) {
        return (peso ?? 1) * 1.5;
    }
}

let correios = new Correios();
let fedex = new Fedex();
let mercadoLivre = new MercadoLivre();

function calcularFreteServico(servico: FreteServico) {
    console.log(`O valor do frete é RS${servico.calcularFrete(50)}`);
}

calcularFreteServico(mercadoLivre);
