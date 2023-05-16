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

async function obterUsuarioApiAsyncAwait() {
    try {
        let usuario = await obterUsuarioApi("1");

        usuario = await addIdadeUsuario(usuario);
        usuario = await addIdadeUsuario(usuario);

        console.log(usuario);
    } catch (reason: any) {
        // Tratamento de Exception
        console.log(reason);
    }
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

obterUsuarioApiAsyncAwait();
console.log("Log depois da chamada");
