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

  const credentialsList = await credentialService.getAllsCredentials(user.id);

  res.status(200).send(credentialsList);
}

export async function getCredentialById(req: Request, res: Response) {
  const { user } = res.locals;
  const id = Number(req.params.id);

  const credential = await credentialService.getCredentialById(user.id, id);

  res.status(200).send(credential);
}

export async function deleteCredential(req: Request, res: Response) {
  const { user } = res.locals;
  const id = Number(req.params.id);

  await credentialService.getCredentialById(user.id, id);
  await credentialService.deleteCredential(user.id, id);

  res.status(200).send(`Credential with id ${id} has been removed!`);
}
