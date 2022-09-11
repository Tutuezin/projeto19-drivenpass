import { Request, Response } from "express";
import * as noteService from "../services/noteService";

export async function createNote(req: Request, res: Response) {
  const note = req.body;
  const { user } = res.locals;

  await noteService.createNote(user.id, note);

  res.status(201).send("Note created!");
}

export async function getAllNotes(req: Request, res: Response) {
  const { user } = res.locals;

  const notes = await noteService.getAllNotes(user.id);

  res.status(200).send(notes);
}

export async function getNoteById(req: Request, res: Response) {
  const { user } = res.locals;
  const id = Number(req.params.id);

  const note = await noteService.getNoteById(user.id, id);

  res.status(200).send(note);
}

export async function deleteNote(req: Request, res: Response) {
  const { user } = res.locals;
  const id = Number(req.params.id);

  await noteService.getNoteById(user.id, id);
  await noteService.deleteNote(id);

  res.status(200).send(`Note with id ${id} has been removed!`);
}
