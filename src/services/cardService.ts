import * as cardTypes from "../types/cardTypes";
//import * as cardRepository from "../repositories/cardRepository";
//import * as cardUtils from "../utils/cardUtils";

export async function createNote(
  userId: number,
  card: cardTypes.ICreateCardData
) {
  // const noteTitleExists = await cardRepository.findTitleNote(
  //   userId,
  //   card.cardTitle
  // );
  //cardUtils.verifyNoteTitleExists(noteTitleExists);
  //await cardRepository.createNote(userId, card);
}

/* export async function getAllNotes(userId: number) {
  return await cardRepository.getAllCards(userId);
}

export async function getNoteById(userId: number, id: number) {
  const note = await noteRepository.getNoteById(userId, id);

  noteUtils.verifyNoteExists(note);

  return note;
}

export async function deleteNote(id: number) {
  return await noteRepository.deleteNote(id);
}
 */
