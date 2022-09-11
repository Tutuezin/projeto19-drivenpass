import * as noteTypes from "../types/noteTypes";
import * as noteRepository from "../repositories/noteRepository";
import * as noteUtils from "../utils/noteUtils";

export async function createNote(
  userId: number,
  note: noteTypes.ICreateNoteData
) {
  const noteTitleExists = await noteRepository.findTitleNote(
    userId,
    note.noteTitle
  );

  noteUtils.verifyNoteTitleExists(noteTitleExists);

  await noteRepository.createNote(userId, note);
}

export async function getAllNotes(userId: number) {
  return await noteRepository.getAllNotes(userId);
}

export async function getNoteById(userId: number, id: number) {
  const note = await noteRepository.getNoteById(userId, id);

  noteUtils.verifyNoteExists(note);

  return note;
}
