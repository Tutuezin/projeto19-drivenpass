import { Request, Response } from "express";
import * as credentialService from "../services/credentialService";

export async function createCredential(req: Request, res: Response) {
  const credential = req.body;
  const { user } = res.locals;

  await credentialService.createCredential(user.id, credential);

  res.status(201).send("Credential created!");
}

export async function getAllCredentials(req: Request, res: Response) {
  const { user } = res.locals;

  const allCredentials = await credentialService.getAllsCredentials(user.id);

  res.status(200).send(allCredentials);
}
