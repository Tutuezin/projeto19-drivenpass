import { Request, Response } from "express";
import * as cardService from "../services/cardService";

export async function createCard(req: Request, res: Response) {
  const card = req.body;
  const { user } = res.locals;

  await cardService.createCard(user.id, card);

  res.status(201).send("Card created!");
}

export async function getAllCards(req: Request, res: Response) {
  const { user } = res.locals;

  const cards = await cardService.getAllCards(user.id);

  res.status(200).send(cards);
}

export async function getCardById(req: Request, res: Response) {
  const { user } = res.locals;
  const id = Number(req.params.id);

  res.status(200).send("");
}

export async function deleteCard(req: Request, res: Response) {
  const { user } = res.locals;
  const id = Number(req.params.id);

  // await noteService.getNoteById(user.id, id);
  // await noteService.deleteNote(id);

  res.status(200).send(`Card with id ${id} has been removed!`);
}
