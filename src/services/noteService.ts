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

export async function getAllsNotes(userId: number) {
  return await noteRepository.getAllNotes(userId);
}
