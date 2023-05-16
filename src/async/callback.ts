export function obterUsuarioApi(callback: any) {
    console.log("Iniciando a chamada...");

    setTimeout(() => {
        callback({
            id: 1,
            nome: "fulano async",
            idade: 20,
        });
    }, 3000);

    console.log("Finalizando a chamada...");
}

function addIdadeUsuario(usuario: any, callback: any) {
    setTimeout(() => {
        usuario.idade += 1;
        console.log("Idade incrementada");

        callback(usuario);
    }, 2000);
}

function alterarNomeUsuario(usuario: any, callback: any) {
    setTimeout(() => {
        usuario.nome = "Nome alterado";
        console.log("nome alterado");

        callback(usuario);
    }, 2000);
}

function imprimirUsuario(usuario: any) {
    console.log(usuario);
}

obterUsuarioApi((usuario: any) =>
    addIdadeUsuario(usuario, (usuario: any) =>
        addIdadeUsuario(usuario, (usuario: any) =>
            addIdadeUsuario(usuario, (usuario: any) =>
                alterarNomeUsuario(usuario, imprimirUsuario)
            )
        )
    )
);
