interface User {
    id: string;
    nome: string;
    idade: number;
}

export function obterUsuarioApi(id: string): Promise<User> {
    return new Promise((resolve, reject) => {
        console.log("Iniciando a chamada...");

        setTimeout(() => {
            if (id === "2") {
                reject("O ID do usuário não pode ser 2");
                return;
            }

            resolve({
                id,
                nome: "fulano async",
                idade: 20,
            });
        }, 3000);

        console.log("Finalizando a chamada...");
    });
}

function imprimirUsuario(usuario: any) {
    console.log(usuario);
}

function addIdadeUsuario(usuario: User): Promise<User> {
    return new Promise((resolve) => {
        setTimeout(() => {
            usuario.idade += 1;
            console.log("Idade incrementada");

            resolve(usuario);
        }, 2000);
    });
}

function alterarNomeUsuario(usuario: any) {
    return new Promise((resolve) => {
        setTimeout(() => {
            usuario.nome = "Nome alterado";
            console.log("nome alterado");

            resolve(usuario);
        }, 2000);
    });
}

obterUsuarioApi("1")
    .then(addIdadeUsuario)
    .then(addIdadeUsuario)
    .then(imprimirUsuario)
    .catch((reason: any) => {
        console.log(reason);
    })
    .finally(() => {
        console.log("Done.");
    });
