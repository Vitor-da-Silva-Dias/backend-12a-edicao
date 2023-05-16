import axios from "axios";

const api = axios.create({
    baseURL: "https://reqres.in/api",
});

export async function listarUsers() {
    try {
        const result = await api.get("/asdasdasd");
        console.log(result.status);
        console.log(result.data);
    } catch (error: any) {
        console.log(error);
        console.log("Erro!!!");
    }
}

export function listarUsersThen() {
    api.get("/asdasdasd")
        .then((result) => {
            console.log(result.status);
            console.log(result.data);
        })
        .catch((error: any) => {
            console.log(error);
            console.log("Erro!!!");
        });
}
