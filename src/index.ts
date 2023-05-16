import express, { Request, Response } from "express";
import { Aluno } from "./aluno/aluno";

const server = express();

// GET http://localhost:3333/alunos
server.get("/alunos", (req: Request, res: Response) => {
    res.status(200).send({
        ok: true,
        data: [new Aluno(1, "Fulano")],
    });
});

// GET http://localhost:3333/user
server.get("/user", (req: Request, res: Response) => {
    res.status(400).send({
        ok: false,
        message: "Id não informado",
    });
});

// POST http://localhost:3333/user
server.post("/user", (req: Request, res: Response) => {
    res.status(400).send({
        ok: false,
        message: "Id não informado",
    });
});

server.listen(3333, () => {
    console.log("API is running.");
});

// http://localhost:3333
