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

export async function getCardById(userId: number, id: number) {
  const card = await cardRepository.getCardById(userId, id);

  cardUtils.verifyCardExists(card);

  if (card) {
    const decryptedPassword = cryptoUtils.decryptData(card?.password);
    const cardById = {
      ...card,
      password: decryptedPassword,
    };
    return cardById;
  }
}

export async function deleteCard(id: number) {
  return await cardRepository.deleteCard(id);
}
