import { Request, Response } from "express";

export async function createCredentials(req: Request, res: Response) {
  const teste = req.body;

  console.log(teste);

  res.status(201).send("Credential created!");
}
