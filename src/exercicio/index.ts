import { Camarote, Normal, Vip } from "./ex1";
import { Imovel, Novo, Velho } from "./ex2";

function exercicio1() {
    const camarote = new Camarote(20, 5);

    camarote.imprimirValor();

    const normal = new Normal(8);

    normal.imprimirValor();

    const vip = new Vip(12, 3);

    vip.imprimirValor();
}

function exercicio2() {
    const imovel = new Imovel("rua da alegria 21", 200);

    const velho = new Velho("rua da tristeza", 300, 40);

    const novo = new Novo("rua nova", 200, 3000);

    // imovel.imprimirValor();

    // velho.imprimirValor();

    // novo.imprimirValor();

    console.log(imovel.getEndereco());

    console.log(imovel.endereco);
    imovel.endereco = "novo endereco";
}

exercicio2();
