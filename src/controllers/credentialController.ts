import { Request, Response } from "express";
import * as credentialService from "../services/credentialService";

export async function createCredentials(req: Request, res: Response) {
  const credential = req.body;

  await credentialService.createCredential(credential);

  res.status(201).send("Credential created!");
}
