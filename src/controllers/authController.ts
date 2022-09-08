import { Request, Response } from "express";
import * as authService from "../services/authService";

export async function signUp(req: Request, res: Response) {
  const user = req.body;

  await authService.signUp(user);

  res.status(201).send("User created!");
}

export async function signIn(req: Request, res: Response) {
  const user = req.body;

  await authService.signIn(user);

  res.status(200).send("");
}
