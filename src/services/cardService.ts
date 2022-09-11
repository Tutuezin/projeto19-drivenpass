import * as cardTypes from "../types/cardTypes";
import * as cardRepository from "../repositories/cardRepository";
import * as cardUtils from "../utils/cardUtils";
import * as cryptoUtils from "../utils/cryptoUtils";

export async function createCard(
  userId: number,
  card: cardTypes.ICreateCardData
) {
  const cardTitleExists = await cardRepository.findTitleCard(
    userId,
    card.cardTitle
  );

  cardUtils.verifyCardTitleExists(cardTitleExists);

  const hashedPassword = cryptoUtils.encryptData(card.password);

  await cardRepository.createCard(userId, {
    ...card,
    password: hashedPassword,
  });
}

export async function getAllCards(userId: number) {
  const cardList = await cardRepository.getAllCards(userId);

  for (let i = 0; i < cardList.length; i++) {
    const element = cardList[i];

    element.password = cryptoUtils.decryptData(element.password);
  }

  return cardList;
}

/* port async function getNoteById(userId: number, id: number) {
  const note = await noteRepository.getNoteById(userId, id);

  noteUtils.verifyNoteExists(note);

  return note;
} */

/* export async function deleteNote(id: number) {
  return await noteRepository.deleteNote(id);
}
  */
